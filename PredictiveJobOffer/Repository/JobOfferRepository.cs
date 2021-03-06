using System.Data;
using System.Data.SqlClient;
using Dapper;
using PredictiveJobOffer.Models;

namespace PredictiveJobOffer.Repository
{
    /// <summary>
    /// Author: Daniele Giometti - Roehampton University - Faculty of Computing
    /// 
    /// Class for Data Access Layer and accessing to JobOffer repository from RDS SQL Server Instance
    /// </summary>
    public class JobOfferRepository
    {
        private readonly IDbConnection _dbConnection;

        /// <summary>
        /// Constructor that encapsulates connection string to database access
        /// </summary>
        public JobOfferRepository()
        {
            // Database connection string
            _dbConnection =
                new SqlConnection(
                    "uid=sa;pwd=Mando123!;Persist Security Info=False;Initial Catalog=JobOffers;Data Source=unifiedjobs.cntzec5n7l48.us-east-1.rds.amazonaws.com;");
        }

        /// <summary>
        /// Function that returns a collection of JobOffer filtered by JobTitle
        /// </summary>
        /// <param name="keyword"></param>
        /// <returns></returns>
        public async Task<IEnumerable<JobOffer>> SearchByJobTitle(string keyword)
        {
            // Dictionary for parsing key value pair property name / value
            var paramDictionary = new Dictionary<string, object>
            {
                { "JobTitle", "%" + keyword + "%" }
            };

            // Query parameters
            var parameters = new DynamicParameters(paramDictionary);

            const string query = @"
SELECT TOP (1000) [Id]
      ,[JobId]
      ,[JobTitle]
      ,[Salary]
      ,[Publisher]
      ,[Country]
      ,[City]
      ,[PublishDate]
      ,[Department]
      ,[JobDescription]
  FROM [JobOffers].[dbo].[JobOffersDetail]
WHERE [JobTitle] like @JobTitle
";

            // Query execution
            var jobOffers = await _dbConnection.QueryAsync<JobOffer>(query, parameters);

            // Return data
            return jobOffers; 
        }

        /// <summary>
        /// Function that returns JobOffer details based by JobId
        /// </summary>
        /// <param name="jobId"></param>
        /// <returns></returns>
        public async Task<JobOffer> GetJobOfferDetail(float jobId)
        {
            // Dictionary for parsing key value pair property name / value
            var paramDictionary = new Dictionary<string, object>
            {
                { "JobId", jobId }
            };

            // Query parameters
            var parameters = new DynamicParameters(paramDictionary);

            const string query = @"
SELECT TOP (1000) [Id]
      ,[JobId]
      ,[JobTitle]
      ,[Salary]
      ,[Publisher]
      ,[Country]
      ,[City]
      ,[PublishDate]
      ,[Department]
      ,[JobDescription]
  FROM [JobOffers].[dbo].[JobOffersDetail]
WHERE [JobId] = @JobId
";

            // Query execution
            var jobOffer = await _dbConnection.QueryFirstOrDefaultAsync<JobOffer>(query, parameters);

            // Return data
            return jobOffer;
        }
    }
}