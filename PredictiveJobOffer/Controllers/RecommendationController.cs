using System.Data.SqlClient;
using Bogus;
using Dapper.Contrib.Extensions;
using Microsoft.AspNetCore.Mvc;
using PredictiveJobOffer.Models;
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

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var sqlConnection = new SqlConnection("uid=sa;pwd=Mando123!;Persist Security Info=False;Initial Catalog=JobOffers;Data Source=unifiedjobs.cntzec5n7l48.us-east-1.rds.amazonaws.com;");

            var jobOffers = await sqlConnection.GetAllAsync<JobOffer>();

            foreach (var jobOffer in jobOffers)
            {
                var fake = new Faker<JobOffer>();
                var instance = fake.CustomInstantiator(_ => jobOffer)
                    .RuleFor(r => r.City, f => f.Address.City())
                    .RuleFor(r => r.Country, f => f.Address.Country())
                    .RuleFor(r => r.PublishDate, f => f.Date.Recent())
                    .RuleFor(r => r.Publisher, f => f.Company.CompanyName())
                    .RuleFor(r => r.Department, f => f.Company.Bs())
                    .RuleFor(r => r.Salary, f => f.Random.ArrayElement(new decimal[]{ 30000, 50000, 70000, 80000, 90000 }))
                    .Generate();

                try
                {
                    await sqlConnection.UpdateAsync(instance);
                }
                catch (Exception e)
                {
                    Console.WriteLine(e);
                }
            }

            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> SearchByJobTitle(string keyword)
        {
            var recommendedViewModel = new RecommendedViewModel();



            return Ok(recommendedViewModel);
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
