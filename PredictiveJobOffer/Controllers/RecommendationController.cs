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
                // Retrieving JobOffers 
                var recommendedViewModel = await _jobOfferRecommender.SearchByJobTitle(keyword);

                return Ok(recommendedViewModel); // Return Ok with status code 400 and ModelView
            }
            catch (Exception e)
            {
                Console.WriteLine(e); // Writing to Console error object (e.g. message and stack)
                return BadRequest(e); // Return BadRequest with status code 400 
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
                // Retrieving JobOffers Recommendations
                var recommendedViewModel = await _jobOfferRecommender.GetRecommendations(userId);

                return Ok(recommendedViewModel); // Return Ok with status code 400 and ModelView
            }
            catch (Exception e)
            {
                Console.WriteLine(e); // Writing to Console error object (e.g. message and stack)
                return BadRequest(e); // Return BadRequest with status code 400 
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
                // Retrieving JobOffers Similarities
                var similarItems = await _jobOfferRecommender.GetSimilarItems(jobOfferId, userId);

                return Ok(similarItems); // Return Ok with status code 400 and ModelView
            }
            catch (Exception e)
            {
                Console.WriteLine(e); // Writing to Console error object (e.g. message and stack)
                return BadRequest(e); // Return BadRequest with status code 400 
            }
        }
    }
}