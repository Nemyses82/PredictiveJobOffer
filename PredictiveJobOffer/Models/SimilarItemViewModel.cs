namespace PredictiveJobOffer.Models
{
    public class SimilarItemViewModel
    {
        public SimilarItemViewModel()
        {
            SimilarItems = new SimilarItems();
        }

        public string UserId { get; set; }

        public JobOffer JobOffer { get; set; }

        public User User { get; set; }

        public SimilarItems SimilarItems { get; set; }
    }
}
