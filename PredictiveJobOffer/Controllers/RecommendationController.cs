using Microsoft.AspNetCore.Mvc;
using PredictiveJobOffer.Services;

namespace PredictiveJobOffer.Controllers
{
    /// <summary>
    /// Author: Daniele Giometti - Roehampton University - Faculty of Computing
    /// 
    /// API Controller that handles incoming HTTP requests regarding JobOffer recommendations
    /// and send response back to the Frontend caller
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class RecommendationController : ControllerBase // Concept of Inheritance
    {
        private readonly JobOfferRecommender _jobOfferRecommender;

        /// <summary>
        /// Constructor that instantiates class itself and global objects
        /// </summary>
        public RecommendationController()
        {
            _jobOfferRecommender = new JobOfferRecommender();
        }

        /// <summary>
        /// HTTP GET - Action result to return set of JobOffers filter by JobTitle
        /// </summary>
        /// <param name="keyword"></param>
        /// <returns></returns>
        [Route("SearchByJobTitle/{keyword}")]
        public async Task<IActionResult> SearchByJobTitle(string keyword) // Concept of Abstraction
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
        /// HTTP GET - Action result to return JobOffers recommendations based by UserId
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        [Route("GetRecommendations/{userId}")]
        public async Task<IActionResult> GetRecommendations(string userId) // Concept of Abstraction
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
        /// HTTP GET - Action result to return JobOffers similarities based by JobOfferId
        /// </summary>
        /// <param name="jobOfferId"></param>
        /// <param name="userId"></param>
        /// <returns></returns>
        [Route("GetSimilarItems/{jobOfferId}/{userId}")]
        public async Task<IActionResult> GetSimilarItems(string jobOfferId, string userId) // Concept of Abstraction
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