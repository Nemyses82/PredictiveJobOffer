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

        // predictive-job-offers-solution-user-personalization
        // predictive-job-offer-engine-campaign-2
        public async Task<RecommendedViewModel> GetRecommendations(string userId)
        {
            RecommendedViewModel results = new();

            try
            {
                //RELATED_ITEMS -- itemId required
                var relateditemsrequest = new GetRecommendationsRequest
                {
                    CampaignArn = "arn:aws:personalize:us-east-1:022189315692:campaign/predictive-job-offer-engine-campaign-2",
                    UserId = userId,
                    NumResults = 50
                };

                var getRecommendationsResponse = await AmazonPersonalizeRuntimeClient.GetRecommendationsAsync(relateditemsrequest);

                if (getRecommendationsResponse.ItemList.Any())
                    results.RecommendedItems.JobOffers = getRecommendationsResponse.ItemList.Select(x => new JobOffer
                    {
                        JobId = Convert.ToSingle(x.ItemId),
                        Score = x.Score
                    }).ToList();

                return results;
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        // predictive-job-offers-solution-similar-items
        // predictive-job-offer-engine-campaign-1
        public async Task<SimilarItemViewModel> GetSimilarItems(string jobOfferId)
        {
            SimilarItemViewModel results = new ();

            try
            {
                //USER_PERSONALIZATION -- userid required
                var request = new GetRecommendationsRequest
                {
                    CampaignArn = "arn:aws:personalize:us-east-1:022189315692:campaign/predictive-job-offer-engine-campaign-1",
                    ItemId = jobOfferId,
                    NumResults = 50
                };
                
                var response = await AmazonPersonalizeRuntimeClient.GetRecommendationsAsync(request);
                
                if (response.ItemList.Any())
                    results.SimilarItems.JobOffers = response.ItemList.Select(x => new JobOffer
                    {
                        JobId = Convert.ToSingle(x.ItemId),
                        Score = x.Score
                    }).ToList();

                return results;
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public async Task AddEventTracker(string jobOfferId, string userId)
        {
            try
            {
                //record events
                var eventRequest = new PutEventsRequest
                {
                    TrackingId = "6aa10cf2-69ff-4542-aa02-4a55f8f164ec",
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
            catch (Exception exception)
            {
                throw;
            }
        }

    }
}
