using Amazon;
using Amazon.SimpleSystemsManagement;
using Amazon.SimpleSystemsManagement.Model;

namespace PredictiveJobOffer.Services
{
    public sealed class AwsParameterStoreClient
    {
        private static readonly Lazy<AwsParameterStoreClient> Lazy = new(() => new AwsParameterStoreClient());

        public static AwsParameterStoreClient Instance => Lazy.Value;

        private AwsParameterStoreClient()
        {
        }

        private static readonly RegionEndpoint Region = RegionEndpoint.USEast1;

        private static string GetValue(string parameter)
        {
            try
            {
                var ssmClient = new AmazonSimpleSystemsManagementClient(Region);

                var pName = $"/amz-personalize-demo/{parameter}";

                var response = ssmClient.GetParameterAsync(new GetParameterRequest
                {
                    Name = pName
                });

                var pramResponse = response.Result;

                return pramResponse.Parameter.Value;
            }
            catch (Exception e)
            {
                throw;
            }
        }

        public static string GetImdbApiKey()
        {
            return GetValue("imdb-api-key");
        }

        public static string GetClickStreamTrackingId()
        {
            return GetValue("demo-click-stream-trk-id");
        }

        public static string GetSimsArn()
        {
            return GetValue("demo-sims-arn");
        }

        public static string GetSimsMostPopularArn()
        {
            return GetValue("demo-sims-most-popular");
        }

        public static string GetPersonalRecommendationsArn()
        {
            return GetValue("demo-personal-recommendations");
        }

        public static string GetS3BucketKey()
        {
            return GetValue("demo-s3-bucket-name");
        }

        public static string GetPersonalRankingArn()
        {
            return GetValue("demo-personal-ranking");
        }
    }
}
