using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using Dapper;
using McqRepository.Models;

namespace McqRepository.Repositories
{
    public class PaperRepository : RepositoryBase
    {
        public PaperRepository(string connectionString) : base(connectionString)
        { }

        public void Insert(PaperMetadata paperMetadata)
        {
            try
            {
                using (IDbConnection db = new SqlConnection(ConnectionString))
                {
                    var query = @"INSERT INTO [dbo].[Paper] ([CategoryId],[Title],[Year],[Description])
                                VALUES (@CategoryId, @Title, @Year, @Description)";
                    db.Execute(query, paperMetadata);
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        public void Update(PaperMetadata paperMetadata)
        {
            try
            {
                using (IDbConnection db = new SqlConnection(ConnectionString))
                {
                    var query = @"UPDATE [dbo].[Paper]
                                SET [CategoryId] = @CategoryId, [Title] = @Title, 
                                [Year] = @Year, [Description] = @Description 
                                WHERE [Id] = @Id";
                    db.Execute(query, paperMetadata);
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        public void Publish(string paperId)
        {
            try
            {
                using (IDbConnection db = new SqlConnection(ConnectionString))
                {
                    var query = @"UPDATE [dbo].[Paper]
                                SET [Publish] = 1
                                WHERE [Id] = @Id";
                    db.Execute(query, new {Id = paperId});
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        public void UnPublish(string paperId)
        {
            try
            {
                using (IDbConnection db = new SqlConnection(ConnectionString))
                {
                    var query = @"UPDATE [dbo].[Paper]
                                SET [Publish] = 0
                                WHERE [Id] = @Id";
                    db.Execute(query, new { Id = paperId });
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
                    var query = "DELETE FROM [dbo].[Paper] " +
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

        public IEnumerable<PaperMetadata> GetAll()
        {
            try
            {
                using (IDbConnection db = new SqlConnection(ConnectionString))
                {
                    var query = @"SELECT [Id],[CategoryId],[Title],[Year],[Description]
                                FROM [dbo].[Paper]";
                    return db.Query<PaperMetadata>(query);
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        public PaperMetadata GetById(string id)
        {
            try
            {
                using (IDbConnection db = new SqlConnection(ConnectionString))
                {
                    var query = @"SELECT p.[Id], pc.[Name] as Category, CategoryId, [Title], [Year], [Description], [Publish] 
                                    FROM Paper p JOIN PaperCategory pc ON p.CategoryId = pc.Id 
                                    WHERE p.[Id] = @Id";
                    return db.Query<PaperMetadata>(query, new {Id = id}).FirstOrDefault();
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        public Papers FetchByFilter(RepositoryFilter filter)
        {
            try
            {
                using (IDbConnection db = new SqlConnection(ConnectionString))
                {
                    var result = new Papers();

                    var query = "SELECT COUNT(Id) FROM Paper";
                    result.TotalItems = db.Query<int>(query).FirstOrDefault();

                    query = "SELECT p.[Id], pc.[Name] as Category, CategoryId, [Title], [Year], [Description], [Publish] " +
                            "FROM Paper p JOIN PaperCategory pc ON p.CategoryId = pc.Id " +
                            $"ORDER BY {filter.SortColumn} {filter.SortDirection} " +
                            $"OFFSET {filter.Offset} ROWS FETCH NEXT {filter.PageSize} ROWS ONLY;";

                    result.Items = db.Query<PaperMetadata>(query)?.ToList();

                    return result;
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
