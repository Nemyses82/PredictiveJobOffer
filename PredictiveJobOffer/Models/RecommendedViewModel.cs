namespace PredictiveJobOffer.Models
{
    public class RecommendedViewModel
    {
        public RecommendedViewModel()
        {
            RecommendedItems = new RecommendedItems();
        }
        
        public RecommendedItems RecommendedItems { get; set; }
    }
}