using Microsoft.AspNetCore.Mvc;
using PredictiveJobOffer.Services;

namespace PredictiveJobOffer.Controllers
{
    /// <summary>
    /// 
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class RecommendationController : ControllerBase
    {
        private readonly JobOfferRecommender _jobOfferRecommender;

        /// <summary>
        /// 
        /// </summary>
        public RecommendationController()
        {
            _jobOfferRecommender = new JobOfferRecommender();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="keyword"></param>
        /// <returns></returns>
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

        /// <summary>
        /// 
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
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

        /// <summary>
        /// 
        /// </summary>
        /// <param name="jobOfferId"></param>
        /// <param name="userId"></param>
        /// <returns></returns>
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