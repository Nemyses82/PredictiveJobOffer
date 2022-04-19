using Microsoft.AspNetCore.Mvc;
using PredictiveJobOffer.Services;

namespace PredictiveJobOffer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecommendationController : ControllerBase
    {
        private readonly JobOfferRecommender _jobOfferRecommender;

        public RecommendationController()
        {
            _jobOfferRecommender = new JobOfferRecommender();
        }

        [Route("SearchByJobTitle/{keyword}")]
        public async Task<IActionResult> SearchByJobTitle(string keyword)
        {
            try
            {
                var recommendedViewModel = await _jobOfferRecommender.SearchByJobTitle(keyword);

                return Ok(recommendedViewModel);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return BadRequest(e);
            }
        }

        [Route("GetRecommendations/{userId}")]
        public async Task<IActionResult> GetRecommendations(string userId)
        {
            try
            {
                var recommendedViewModel = await _jobOfferRecommender.GetRecommendations(userId);
                return Ok(recommendedViewModel);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return BadRequest(e);
            }
        }

        [Route("GetSimilarItems/{jobOfferId}/{userId}")]
        public async Task<IActionResult> GetSimilarItems(string jobOfferId, string userId)
        {
            try
            {
                var similarItems = await _jobOfferRecommender.GetSimilarItems(jobOfferId, userId);
                return Ok(similarItems);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return BadRequest(e);
            }
        }

    }
}
