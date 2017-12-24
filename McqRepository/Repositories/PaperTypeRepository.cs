using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using Dapper;
using McqRepository.Models;

namespace McqRepository.Repositories
{
    public class PaperTypeRepository : RepositoryBase
    {
        public PaperTypeRepository(string connectionString) : base(connectionString)
        { }

        public void Insert(string category)
        {
            try
            {
                using (IDbConnection db = new SqlConnection(ConnectionString))
                {
                    var query = $"INSERT INTO [dbo].[PaperCategory] ([Name]) VALUES ('{category}')";
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
                    var query = "UPDATE [dbo].[PaperCategory] " +
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
                    var query = "DELETE FROM [dbo].[PaperCategory] " +
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

        public IEnumerable<PaperType> GetAll()
        {
            try
            {
                using (IDbConnection db = new SqlConnection(ConnectionString))
                {
                    var query = "SELECT [Id],[Name] FROM [dbo].[PaperCategory];";
                    return db.Query<PaperType>(query);
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        public PaperCategories FetchByFilter(RepositoryFilter filter)
        {
            try
            {
                using (IDbConnection db = new SqlConnection(ConnectionString))
                {
                    var result = new PaperCategories();

                    var query = "SELECT COUNT(Id) FROM PaperCategory";
                    result.TotalItems = db.Query<int>(query).FirstOrDefault();

                    query = "SELECT pc.[Id], pc.[Name], COUNT(p.CategoryId) AS [AssociatedTests] " +
                            "FROM PaperCategory pc LEFT JOIN Paper p ON pc.Id = p.CategoryId " +
                            "GROUP BY pc.Id, pc.Name " +
                            $"ORDER BY {filter.SortColumn} {filter.SortDirection} " +
                            $"OFFSET {filter.Offset} ROWS FETCH NEXT {filter.PageSize} ROWS ONLY;";
                    result.Items = db.Query<PaperType>(query)?.ToList();

                    return result;
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        public PaperType FetchById(string id)
        {
            try
            {
                using (IDbConnection db = new SqlConnection(ConnectionString))
                {

                    var query = @"SELECT pc.[Id], pc.[Name], COUNT(p.CategoryId) AS [AssociatedTests]
                                    FROM PaperCategory pc LEFT JOIN Paper p ON pc.Id = p.CategoryId
                                    GROUP BY pc.Id, pc.Name WHERE pc.Id = @Id";
                    return db.Query<PaperType>(query, new {Id = id}).FirstOrDefault();
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
