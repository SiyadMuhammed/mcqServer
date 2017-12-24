using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using Dapper;
using McqRepository.Models;

namespace McqRepository.Repositories
{
    public class QueryTypeRepository : RepositoryBase
    {
        public QueryTypeRepository(string connectionString) : base(connectionString)
        { }

        public void Insert(string category)
        {
            try
            {
                using (IDbConnection db = new SqlConnection(ConnectionString))
                {
                    var query = $"INSERT INTO [dbo].[QueryCategory] ([Name]) VALUES ('{category}')";
                    db.Execute(query);
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        public void Update(string id, string name)
        {
            try
            {
                using (IDbConnection db = new SqlConnection(ConnectionString))
                {
                    var query = "UPDATE [dbo].[QueryCategory] " +
                                $"SET Name = '{name}'" +
                                $"WHERE Id = '{id}'; ";
                    db.Execute(query);
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        public void Delete(string id)
        {
            try
            {
                using (IDbConnection db = new SqlConnection(ConnectionString))
                {
                    var query = "DELETE FROM [dbo].[QueryCategory] " +
                                $"WHERE Id = '{id}'; ";
                    db.Execute(query);
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        public IEnumerable<QueryType> GetAll()
        {
            try
            {
                using (IDbConnection db = new SqlConnection(ConnectionString))
                {
                    var query = "SELECT [Id],[Name] FROM [dbo].[QueryCategory];";
                    return db.Query<QueryType>(query);
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        public QueryTypes FetchByFilter(RepositoryFilter filter)
        {
            try
            {
                using (IDbConnection db = new SqlConnection(ConnectionString))
                {
                    var result = new QueryTypes();

                    var query = "SELECT COUNT(Id) FROM QueryCategory";
                    result.TotalItems = db.Query<int>(query).FirstOrDefault();

                    query = "SELECT qc.[Id], qc.[Name], COUNT(q.CategoryId) AS [AssociatedQueries] " +
                            "FROM QueryCategory qc LEFT JOIN Query q ON qc.Id = q.CategoryId " +
                            "GROUP BY qc.Id, qc.Name " +
                            $"ORDER BY {filter.SortColumn} {filter.SortDirection} " +
                            $"OFFSET {filter.Offset} ROWS FETCH NEXT {filter.PageSize} ROWS ONLY;";
                    result.Items = db.Query<QueryType>(query)?.ToList();

                    return result;
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        public QueryType FetchById(string id)
        {
            try
            {
                using (IDbConnection db = new SqlConnection(ConnectionString))
                {

                    var query = @"SELECT qc.[Id], qc.[Name], COUNT(q.CategoryId) AS [AssociatedQueries]
                                    FROM QueryCategory qc LEFT JOIN Query q ON qc.Id = q.CategoryId
                                    GROUP BY qc.Id, qc.Name WHERE qc.Id = @Id";
                    return db.Query<QueryType>(query, new { Id = id }).FirstOrDefault();
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }
    }
}
