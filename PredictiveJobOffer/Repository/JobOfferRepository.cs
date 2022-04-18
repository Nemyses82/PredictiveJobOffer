﻿using System.Data;
using System.Data.SqlClient;
using Dapper;
using PredictiveJobOffer.Models;

namespace PredictiveJobOffer.Repository
{
    public class JobOfferRepository
    {
        private readonly IDbConnection _dbConnection;

        public JobOfferRepository()
        {
            _dbConnection = new SqlConnection("uid=sa;pwd=Mando123!;Persist Security Info=False;Initial Catalog=JobOffers;Data Source=unifiedjobs.cntzec5n7l48.us-east-1.rds.amazonaws.com;");
        }

        public async Task<IEnumerable<JobOffer>> SearchByJobTitle(string keyword)
        {
            var paramDictionary = new Dictionary<string, object>
            {
                {"JobTitle", "%" + keyword + "%" }
            };

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

            var jobOffers = await _dbConnection.QueryAsync<JobOffer>(query, parameters);

            return jobOffers;
        }

        public async Task<JobOffer> GetJobOfferDetail(float jobId)
        {
            var paramDictionary = new Dictionary<string, object>
            {
                {"JobId", jobId}
            };

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

            var jobOffer = await _dbConnection.QueryFirstOrDefaultAsync<JobOffer>(query, parameters);

            return jobOffer;
        }
    }
}
