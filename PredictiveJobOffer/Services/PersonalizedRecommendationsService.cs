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
    /// <summary>
    /// Author: Daniele Giometti - Roehampton University - Faculty of Computing
    /// 
    /// Service class that acts as gateway to AWS Personalize API
    /// </summary>
    /// <see cref="https://docs.aws.amazon.com/personalize/latest/dg/API_Operations_Amazon_Personalize_Runtime.html"/>
    public class PersonalizedRecommendationsService
    {
        public AmazonPersonalizeClient AmazonPersonalizeClient { get; set; }

        public AmazonPersonalizeRuntimeClient AmazonPersonalizeRuntimeClient { get; set; }

        public PersonalizedRecommendationsService()
        {
            AmazonPersonalizeClient = new AmazonPersonalizeClient(RegionEndpoint.USEast1);

            AmazonPersonalizeRuntimeClient = new AmazonPersonalizeRuntimeClient(RegionEndpoint.USEast1);
        }

        /// <summary>
        /// Function that returns view mode recommendations based by UserId
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        public async Task<RecommendedViewModel> GetRecommendations(string userId)
        {
            RecommendedViewModel results = new();

            var getRecommendationsRequest = new GetRecommendationsRequest
            {
                CampaignArn =
                    "arn:aws:personalize:us-east-1:022189315692:campaign/predictive-job-offer-engine-user-personalization-campaign-1",
                UserId = userId,
                NumResults = 30
            };

            var getRecommendationsResponse =
                await AmazonPersonalizeRuntimeClient.GetRecommendationsAsync(getRecommendationsRequest);

            if (getRecommendationsResponse.ItemList.Any())
                results.RecommendedItems.JobOffers = getRecommendationsResponse.ItemList.Select(x => new JobOffer
                {
                    JobId = Convert.ToInt32(x.ItemId),
                    Score = x.Score
                }).ToList();

            return results;
        }

        /// <summary>
        /// Function that returns view mode similarities based by UserId
        /// </summary>
        /// <param name="jobOfferId"></param>
        /// <returns></returns>
        public async Task<SimilarItemViewModel> GetSimilarItems(string jobOfferId)
        {
            SimilarItemViewModel results = new();

            //USER_PERSONALIZATION -- userid required
            var request = new GetRecommendationsRequest
            {
                CampaignArn =
                    "arn:aws:personalize:us-east-1:022189315692:campaign/predictive-job-offer-engine-similar-items-campaign-2",
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

        /// <summary>
        /// Function void that records user interaction event data. For more information see Recording Events.
        /// </summary>
        /// <see cref="https://docs.aws.amazon.com/personalize/latest/dg/recording-events.html"/>
        /// <see cref="https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutEvents.html"/>
        /// <param name="jobOfferId"></param>
        /// <param name="userId"></param>
        /// <returns></returns>
        public async Task AddEventTracker(string jobOfferId, string userId)
        {
            //Record Events
            var eventRequest = new PutEventsRequest
            {
                TrackingId = "144fdc3f-e4bd-4946-b2ee-ee90ca0a7b7d", //Event Tracker ID
                UserId = userId, //USER_ID
                SessionId = Guid.NewGuid().ToString() //SESSION_ID
            };

            var ev1 = new TrackingEvent { itemId = jobOfferId };

            var ev = JsonConvert.SerializeObject(ev1);

            var e = new Event
            {
                //e.EventId = "event1";
                EventType = "click", //EVENT_TYPE
                Properties = ev, //Tracking Event
                SentAt = DateTime.Now //TIMESTAMP
            };

            var events = new List<Event> { e };

            eventRequest.EventList = events;

            var amazonPersonalizeEventsClient = new AmazonPersonalizeEventsClient(RegionEndpoint.USEast1);

            await amazonPersonalizeEventsClient.PutEventsAsync(eventRequest);
        }
    }
}