namespace PredictiveJobOffer.Models
{
    public class JobOffer
    {
        public string Id { get; set; }
        public string ImdbId { get; set; }
        public string Title { get; set; }
        public string PosterUrl { get; set; }
        public string Rating { get; set; }

        public string Year { get; set; }
        public string Genre { get; set; }

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
