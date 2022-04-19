using Amazon;
using Amazon.Personalize;
using Amazon.PersonalizeEvents;
using Amazon.PersonalizeEvents.Model;
using Amazon.PersonalizeRuntime;
using Amazon.PersonalizeRuntime.Model;
using Newtonsoft.Json;
using PredictiveJobOffer.Models;

namespace PredictiveJobOffer.Services
{
    public class PersonalizedRecommendationsService
    {
        public AmazonPersonalizeClient AmazonPersonalizeClient { get; set; }

        public AmazonPersonalizeRuntimeClient AmazonPersonalizeRuntimeClient { get; set; }

        public PersonalizedRecommendationsService()
        {
            AmazonPersonalizeClient = new AmazonPersonalizeClient(RegionEndpoint.USEast1);

            AmazonPersonalizeRuntimeClient = new AmazonPersonalizeRuntimeClient(RegionEndpoint.USEast1);
        }

        // arn:aws:personalize:us-east-1:022189315692:campaign/predictive-job-offer-engine-user-personalization-campaign-1
        public async Task<RecommendedViewModel> GetRecommendations(string userId)
        {
            RecommendedViewModel results = new();

            //RELATED_ITEMS -- itemId required
            var getRecommendationsRequest = new GetRecommendationsRequest
            {
                CampaignArn = "arn:aws:personalize:us-east-1:022189315692:campaign/predictive-job-offer-engine-user-personalization-campaign-1",
                UserId = userId,
                NumResults = 30
            };

            var getRecommendationsResponse = await AmazonPersonalizeRuntimeClient.GetRecommendationsAsync(getRecommendationsRequest);

            if (getRecommendationsResponse.ItemList.Any())
                results.RecommendedItems.JobOffers = getRecommendationsResponse.ItemList.Select(x => new JobOffer
                {
                    JobId = Convert.ToInt32(x.ItemId),
                    Score = x.Score
                }).ToList();

            return results;
        }

        // arn:aws:personalize:us-east-1:022189315692:campaign/predictive-job-offer-engine-similar-items-campaign-1
        // arn:aws:personalize:us-east-1:022189315692:campaign/predictive-job-offer-engine-similar-items-new-campaign-1
        // arn:aws:personalize:us-east-1:022189315692:campaign/predictive-job-offer-engine-similar-items-campaign-2

        public async Task<SimilarItemViewModel> GetSimilarItems(string jobOfferId)
        {
            SimilarItemViewModel results = new();

            //USER_PERSONALIZATION -- userid required
            var request = new GetRecommendationsRequest
            {
                CampaignArn = "arn:aws:personalize:us-east-1:022189315692:campaign/predictive-job-offer-engine-similar-items-campaign-2",
                ItemId = jobOfferId,
                NumResults = 30
            };

            var response = await AmazonPersonalizeRuntimeClient.GetRecommendationsAsync(request);

            if (response.ItemList.Any())
                results.SimilarItems.JobOffers = response.ItemList.Select(x => new JobOffer
                {
                    JobId = Convert.ToInt32(x.ItemId),
                    Score = x.Score
                }).ToList();

            return results;
        }

        public async Task AddEventTracker(string jobOfferId, string userId)
        {
            //record events
            var eventRequest = new PutEventsRequest
            {
                TrackingId = "144fdc3f-e4bd-4946-b2ee-ee90ca0a7b7d",
                UserId = userId, //USER_ID
                SessionId = Guid.NewGuid().ToString() //SESSION_ID
            };

            var ev1 = new TrackingEvent { itemId = jobOfferId };

            var ev = JsonConvert.SerializeObject(ev1);

            var e = new Event
            {
                //e.EventId = "event1";
                EventType = "click", //EVENT_TYPE
                Properties = ev,
                SentAt = DateTime.Now, //TIMESTAMP
            };

            var events = new List<Event> { e };

            eventRequest.EventList = events;

            var amazonPersonalizeEventsClient = new AmazonPersonalizeEventsClient(RegionEndpoint.USEast1);

            await amazonPersonalizeEventsClient.PutEventsAsync(eventRequest);
        }
    }
}
