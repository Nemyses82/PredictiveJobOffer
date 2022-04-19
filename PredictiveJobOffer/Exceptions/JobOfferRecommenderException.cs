namespace PredictiveJobOffer.Exceptions
{
    public class JobOfferRecommenderException : Exception
    {
        public JobOfferRecommenderException()
        {
        }

        public JobOfferRecommenderException(string message)
            : base(message)
        {
        }

        public JobOfferRecommenderException(string message, Exception inner)
            : base(message, inner)
        {
        }
    }
}