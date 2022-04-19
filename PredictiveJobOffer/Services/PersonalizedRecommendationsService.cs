using Amazon;
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

        public AmazonPersonalizeRuntimeClient AmazonPersonalizeRuntimeClient { get; set; }

        public PersonalizedRecommendationsService()
        {
            // Instance of Amazon Personalize Runtime Client with specific Region
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

            // Setting GetRecommendations request
            var getRecommendationsRequest = new GetRecommendationsRequest
            {
                CampaignArn =
                    "arn:aws:personalize:us-east-1:022189315692:campaign/predictive-job-offer-engine-user-personalization-campaign-1",
                UserId = userId,
                NumResults = 30
            };

            // Performing request to AWS Personalize to retrieve recommendations 
            var getRecommendationsResponse =
                await AmazonPersonalizeRuntimeClient.GetRecommendationsAsync(getRecommendationsRequest);

            // Preparing DTO for returning data
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

            // Setting GetRecommendations request
            var request = new GetRecommendationsRequest
            {
                CampaignArn =
                    "arn:aws:personalize:us-east-1:022189315692:campaign/predictive-job-offer-engine-similar-items-campaign-2",
                ItemId = jobOfferId,
                NumResults = 30
            };

            // Performing request to AWS Personalize to retrieve similarities 
            var response = await AmazonPersonalizeRuntimeClient.GetRecommendationsAsync(request);

            // Preparing DTO for returning data
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
            // Setting PutEvents request
            var eventRequest = new PutEventsRequest
            {
                TrackingId = "144fdc3f-e4bd-4946-b2ee-ee90ca0a7b7d", //Event Tracker ID
                UserId = userId, //USER_ID
                SessionId = Guid.NewGuid().ToString() //SESSION_ID
            };

            var trackingEvent = new TrackingEvent { itemId = jobOfferId };

            var serializeEvent = JsonConvert.SerializeObject(trackingEvent);

            var @event = new Event
            {
                EventType = "click", //EVENT_TYPE
                Properties = serializeEvent, //Tracking Event
                SentAt = DateTime.Now //TIMESTAMP
            };

            var events = new List<Event> { @event };

            eventRequest.EventList = events;

            // Instance of Amazon Personalize object with specific Region
            var amazonPersonalizeEventsClient = new AmazonPersonalizeEventsClient(RegionEndpoint.USEast1);

            // Performing submission of User Interaction event
            await amazonPersonalizeEventsClient.PutEventsAsync(eventRequest);
        }
    }
}