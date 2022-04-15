using Amazon;
using Amazon.Personalize;
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
            RecommendedViewModel results = null;

            try
            {
                //RELATED_ITEMS -- itemId required
                var relateditemsrequest = new GetRecommendationsRequest
                {
                    // CampaignArn = AwsParameterStoreClient.GetSimsArn(), //sims-arn
                    CampaignArn = "arn:aws:personalize:us-east-1:022189315692:campaign/predictive-job-offer-engine-campaign-2",
                    UserId = userId,
                    NumResults = 10
                };

                var relateditemsrequestresponse = await AmazonPersonalizeRuntimeClient.GetRecommendationsAsync(relateditemsrequest);

                var relateditemsrequestrecommendedItems = relateditemsrequestresponse.ItemList;

                var json = JsonConvert.SerializeObject(relateditemsrequestrecommendedItems);
                //
                // Logger.LogInformation("GetSimilarItems for movie:" + jobOfferId + ": " + json);

                // results = new SimilarItemViewModel
                // {
                //
                //     //selected movie
                //     JobOffer = await _storageService.GetMovieData(jobOfferId)
                // };


                // List<string> itemIds = relateditemsrequestrecommendedItems.Select(s => s.ItemId).ToList();
                //
                // results.SimilarItems.Movies = await _storageService.GetMovieData(itemIds.ToArray());

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
            SimilarItemViewModel results = null;

            try
            {
                //USER_PERSONALIZATION -- userid required
                var request = new GetRecommendationsRequest
                {
                    // CampaignArn = AwsParameterStoreClient.GetPersonalRecommendationsArn(), //personal-recommendations-metadata
                    CampaignArn = "arn:aws:personalize:us-east-1:022189315692:campaign/predictive-job-offer-engine-campaign-1",
                    ItemId = jobOfferId,
                    NumResults = 10
                };
                
                var response = await AmazonPersonalizeRuntimeClient.GetRecommendationsAsync(request);
                
                var recommendedItems = response.ItemList;
                
                // var json = JsonConvert.SerializeObject(recommendedItems);
                //
                //     Logger.LogInformation("GetRecommendations:" + jobOfferId + ": " + json);
                //
                // results = new PersonalizeViewModel { User = new User() { User_Id = jobOfferId } };
                
                // get movie thumbnail from imdb
                // IList<RecommendedItems> recItems = new List<RecommendedItems>();
                
                // var itemIds = recommendedItems.Select(s => s.ItemId).ToList();
                //
                //     results.RecommendedItems.Movies = await _storageService.GetMovieData(itemIds.ToArray());
                //
                return results;
            }
            catch (Exception ex)
            {
                throw;
            }
        }

    }
}
