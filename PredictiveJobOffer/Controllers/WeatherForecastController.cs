using Microsoft.AspNetCore.Mvc;
using PredictiveJobOffer.Services;

namespace PredictiveJobOffer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly ILogger<WeatherForecastController> _logger;
        private JobOfferRecommender _jobOfferRecommender;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
            _jobOfferRecommender = new JobOfferRecommender();
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {

            // Temporary logic to retrieve Recommendations

            var personalizeViewModel =
                Task.Run(() => _jobOfferRecommender.GetRecommendations("1"));

            var similarItemViewModel =
                Task.Run(() => _jobOfferRecommender.GetSimilarItems("41989292"));

            //


            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}