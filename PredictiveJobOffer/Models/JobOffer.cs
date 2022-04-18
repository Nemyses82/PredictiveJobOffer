using Dapper.Contrib.Extensions;

namespace PredictiveJobOffer.Models
{
    [Table("[dbo].JobOffersDetail")]
    public class JobOffer
    {
        [ExplicitKey]
        public string Id { get; set; }

        public float JobId { get; set; }
        public string JobTitle { get; set; }
        public decimal Salary { get; set; }
        public string Publisher { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public DateTime PublishDate { get; set; }
        public string Department { get; set; }
        public string JobDescription { get; set; }

        [Write(false)]
        public string ImdbId { get; set; }

        [Write(false)]
        public string Title { get; set; }

        [Write(false)]
        public string PosterUrl { get; set; }

        [Write(false)]
        public string Rating { get; set; }

        [Write(false)]
        public string Year { get; set; }

        [Write(false)]
        public string Genre { get; set; }

        [Write(false)]
        public double Score { get; set; }

        public string GetRating()
        {
            if (!string.IsNullOrEmpty(Rating))
            {
                var val = Convert.ToDouble(Rating);

                return (val / 2.0).ToString("0.0");
            }

            return Rating;
        }
    }
}
