using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using Dapper;
using McqRepository.Models;

namespace McqRepository.Repositories
{
    public class QueryRepository : RepositoryBase
    {
        public QueryRepository(string connectionString) : base(connectionString)
        { }

        public void Insert(Query question)
        {
            try
            {
                using (IDbConnection db = new SqlConnection(ConnectionString))
                {
                    var query = @"INSERT INTO [dbo].[Query] ([CategoryId],[PaperId],
                                    [Question],[Answer],[Option1],[Option2],[Option3])
                                VALUES (@CategoryId,@PaperId,@Question,@Answer,@Option1,@Option2,@Option3)";
                    db.Execute(query, question);
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        public void Update(Query question)
        {
            try
            {
                using (IDbConnection db = new SqlConnection(ConnectionString))
                {
                    var query = @"UPDATE [dbo].[Query] SET [CategoryId] = @CategoryId,
                                    [Question] = @Question,[Answer] = @Answer,
                                    [Option1] = @Option1,[Option2] = @Option2,[Option3] = @Option3 
                                    WHERE [Id] = @Id";
                    db.Execute(query, question);
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
                    var query = "DELETE FROM [dbo].[Query] " +
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

        public IEnumerable<Query> GetAll()
        {
            try
            {
                using (IDbConnection db = new SqlConnection(ConnectionString))
                {
                    var query = @"SELECT [Id], [CategoryId], [PaperId], [Question], [Answer], 
                                    [Option1], [Option2], [Option3]
                                FROM [dbo].[Query]";
                    return db.Query<Query>(query);
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        public Queries FetchByFilter(RepositoryFilter filter, string paperId)
        {
            try
            {
                using (IDbConnection db = new SqlConnection(ConnectionString))
                {
                    var result = new Queries();

                    var query = "SELECT COUNT(Id) FROM Query Where PaperId = @PaperId";
                    result.TotalItems = db.Query<int>(query, new { PaperId = paperId }).FirstOrDefault();

                    query = "SELECT q.[Id], [PaperId], qc.[Name] As Category, q.[CategoryId], [Question], [Answer], [Option1], " +
                            "[Option2], [Option3] FROM Query q JOIN QueryCategory qc ON q.CategoryId = qc.Id " +
                            $"WHERE PaperId = '{paperId}' " +
                            $"ORDER BY {filter.SortColumn} {filter.SortDirection} " +
                            $"OFFSET {filter.Offset} ROWS FETCH NEXT {filter.PageSize} ROWS ONLY;";
                    result.Items = db.Query<Query>(query)?.ToList();

                    return result;
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        public Queries FetchByFilter(RepositoryFilter filter)
        {
            try
            {
                using (IDbConnection db = new SqlConnection(ConnectionString))
                {
                    var result = new Queries();

                    var query = "SELECT COUNT(Id) FROM Query";
                    result.TotalItems = db.Query<int>(query).FirstOrDefault();

                    query = "SELECT q.[Id], [PaperId], qc.[Name] As Category, q.[CategoryId], [Question], [Answer], [Option1], " +
                            "[Option2], [Option3] FROM Query q JOIN QueryCategory qc ON q.CategoryId = qc.Id " +
                            $"ORDER BY {filter.SortColumn} {filter.SortDirection} " +
                            $"OFFSET {filter.Offset} ROWS FETCH NEXT {filter.PageSize} ROWS ONLY;";
                    result.Items = db.Query<Query>(query)?.ToList();

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
