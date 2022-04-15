namespace PredictiveJobOffer.Models
{
    public class RecommendedViewModel
    {
        public RecommendedViewModel()
        {
            RecommendedItems = new RecommendedItems();

            // MoviesRatedByUser = new MoviesRatedByUser();
            //
            // MostPopularItems = new MostPopularItems();
            //
            // PersonalizedRankingResults = new PersonalizedRankingResults();
            //
            // SimilarItems = new SimilarItems();
            //
            // PersonalizedRankingResultsForRecommendations = new PersonalizedRankingResults();
        }

        public User User { get; set; }

        // public PersonalizedRankingResults PersonalizedRankingResults { get; set; }
        //
        // public PersonalizedRankingResults PersonalizedRankingResultsForRecommendations { get; set; }
        //
        // public SimilarItems SimilarItems { get; set; }

        public RecommendedItems RecommendedItems { get; set; }

        // public MoviesRatedByUser MoviesRatedByUser { get; set; }
        //
        // public MostPopularItems MostPopularItems { get; set; }
    }
}
