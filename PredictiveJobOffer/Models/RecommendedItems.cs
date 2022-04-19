namespace PredictiveJobOffer.Models
{
    public class RecommendedItems
    {
        public RecommendedItems()
        {
            JobOffers = new List<JobOffer>();
        }

        public List<JobOffer> JobOffers { get; set; }
    }
}