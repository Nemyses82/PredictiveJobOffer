namespace PredictiveJobOffer.Models
{
    public class SimilarItems
    {
        public SimilarItems()
        {
            JobOffers = new List<JobOffer>();
        }

        public List<JobOffer> JobOffers { get; set; }
    }
}
