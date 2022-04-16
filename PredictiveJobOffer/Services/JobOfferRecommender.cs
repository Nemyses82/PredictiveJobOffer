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
                if (recommendations != null)
                    results.RecommendedItems = recommendations.RecommendedItems;
        
                return results;
            }
            catch (Exception e)
            {
                throw;
            }
        }

        public async Task<SimilarItemViewModel> GetSimilarItems(string jobOfferId, string userId)
        {
            try
            {
                PersonalizedRecommendationsService.AddEventTracker(jobOfferId, userId);

                var results = await PersonalizedRecommendationsService.GetSimilarItems(jobOfferId);

                return results;
            }
            catch (Exception e)
            {
                throw;
            }
        }
    }
}
