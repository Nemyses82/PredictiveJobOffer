using PredictiveJobOffer.Exceptions;
using PredictiveJobOffer.Models;
using PredictiveJobOffer.Repository;

namespace PredictiveJobOffer.Services
{
    public class JobOfferRecommender
    {
        private readonly JobOfferRepository _jobOfferRepository;
        private PersonalizedRecommendationsService PersonalizedRecommendationsService { get; }

        public JobOfferRecommender()
        {
            PersonalizedRecommendationsService = new PersonalizedRecommendationsService();
            _jobOfferRepository = new JobOfferRepository();
        }

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
                throw new JobOfferRecommenderException(e);
            }
        }

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
                throw new JobOfferRecommenderException(e);
            }

            return results;
        }

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
                throw new JobOfferRecommenderException(e);
            }

            return results;
        }
    }
}
