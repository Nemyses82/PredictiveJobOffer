namespace PredictiveJobOffer.Exceptions
{
    /// <summary>
    /// Author: Daniele Giometti - Roehampton University - Faculty of Computing
    /// 
    /// Custom Exception raised by JobOfferRecommender: it helps to investigate
    /// in case of troubleshooting as you can isolate the source of problems
    /// <see cref="https://docs.microsoft.com/en-us/dotnet/standard/exceptions/how-to-create-user-defined-exceptions"/>
    /// </summary>
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