using PredictiveJobOffer.Models;

namespace PredictiveJobOffer.Services
{
    public class JobOfferRecommender
    {
        public PersonalizedRecommendationsService PersonalizedRecommendationsService { get; set; }

        public JobOfferRecommender()
        {
            PersonalizedRecommendationsService = new PersonalizedRecommendationsService();
        }

        public async Task<RecommendedViewModel> GetRecommendations(string userId)
        {
            try
            {
        
                var results = new RecommendedViewModel();
        
                var recommendations = await PersonalizedRecommendationsService.GetRecommendations(userId);
                // results.User = recommendations.User;
                results.RecommendedItems = recommendations.RecommendedItems;
        
                return results;
            }
            catch (Exception e)
            {
                throw;
            }
        }

        public async Task<SimilarItemViewModel> GetSimilarItems(string jobOfferId)
        {
            try
            {
                //add click event
                // PersonalizedRecommendationsService.AddEventTracker(jobOfferId, userId);

                var results = await PersonalizedRecommendationsService.GetSimilarItems(jobOfferId);

                // results.SimilarItemViewModel.UserId = userId;

                //get user info
                // results.SimilarItemViewModel.User = new User() { User_Id = userId };
                //
                // results.MostPopularItems = await PersonalizedRecommendationsService.GetMostPopularItems(userId);

                return results;
            }
            catch (Exception e)
            {
                throw;
            }
        }
    }
}
