using PredictiveJobOffer.Exceptions;
using PredictiveJobOffer.Models;
using PredictiveJobOffer.Repository;

namespace PredictiveJobOffer.Services
{
    /// <summary>
    /// Class facade responsible to handle requests for 
    /// retrieving information about JobOffers and recommended data
    /// </summary>
    public class JobOfferRecommender
    {
        private readonly JobOfferRepository _jobOfferRepository;
        private PersonalizedRecommendationsService PersonalizedRecommendationsService { get; }

        public JobOfferRecommender()
        {
            PersonalizedRecommendationsService = new PersonalizedRecommendationsService();
            _jobOfferRepository = new JobOfferRepository();
        }

        /// <summary>
        /// Function for fetching JobOffers filtering by JobTile
        /// </summary>
        /// <param name="keyword"></param>
        /// <returns></returns>
        /// <exception cref="JobOfferRecommenderException"></exception>
        public async Task<RecommendedViewModel> SearchByJobTitle(string keyword)
        {
            try
            {
                var searchByJobTitle = await _jobOfferRepository.SearchByJobTitle(keyword);

                var results = new RecommendedViewModel
                {
                    RecommendedItems =
                    {
                        JobOffers = searchByJobTitle.ToList()
                    }
                };

                return results;
            }
            catch (Exception e)
            {
                throw new JobOfferRecommenderException(e.Message);
            }
        }

        /// <summary>
        /// Function for retrieving Recommendations based by UserId
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        /// <exception cref="JobOfferRecommenderException"></exception>
        public async Task<RecommendedViewModel> GetRecommendations(string userId)
        {
            var results = new RecommendedViewModel();

            try
            {
                var recommendations = await PersonalizedRecommendationsService.GetRecommendations(userId);

                foreach (var jobOffer in recommendations.RecommendedItems.JobOffers)
                {
                    var detail = await _jobOfferRepository.GetJobOfferDetail(jobOffer.JobId);
                    jobOffer.JobTitle = detail.JobTitle;
                    jobOffer.Salary = detail.Salary;
                    jobOffer.Publisher = detail.Publisher;
                    jobOffer.Country = detail.Country;
                    jobOffer.City = detail.City;
                    jobOffer.PublishDate = detail.PublishDate;
                    jobOffer.Department = detail.Department;
                    jobOffer.JobDescription = detail.JobDescription;
                }

                results.RecommendedItems = recommendations.RecommendedItems;
            }
            catch (Exception e)
            {
                throw new JobOfferRecommenderException(e.Message);
            }

            return results;
        }

        /// <summary>
        /// Function for retrieving Similarities based by JobOfferId and UserId
        /// </summary>
        /// <param name="jobOfferId"></param>
        /// <param name="userId"></param>
        /// <returns></returns>
        /// <exception cref="JobOfferRecommenderException"></exception>
        public async Task<SimilarItemViewModel> GetSimilarItems(string jobOfferId, string userId)
        {
            var results = new SimilarItemViewModel();

            try
            {
                await PersonalizedRecommendationsService.AddEventTracker(jobOfferId, userId);

                var similarities = await PersonalizedRecommendationsService.GetSimilarItems(jobOfferId);

                foreach (var jobOffer in similarities.SimilarItems.JobOffers)
                {
                    var detail = await _jobOfferRepository.GetJobOfferDetail(jobOffer.JobId);
                    jobOffer.JobTitle = detail.JobTitle;
                    jobOffer.Salary = detail.Salary;
                    jobOffer.Publisher = detail.Publisher;
                    jobOffer.Country = detail.Country;
                    jobOffer.City = detail.City;
                    jobOffer.PublishDate = detail.PublishDate;
                    jobOffer.Department = detail.Department;
                    jobOffer.JobDescription = detail.JobDescription;
                }

                results.SimilarItems = similarities.SimilarItems;
            }
            catch (Exception e)
            {
                throw new JobOfferRecommenderException(e.Message);
            }

            return results;
        }
    }
}