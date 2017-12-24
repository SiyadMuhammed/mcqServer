using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using Dapper;
using McqRepository.Models;

namespace McqRepository.Repositories
{
    public class UserRepository : RepositoryBase
    {
        public UserRepository(string connectionString) : base(connectionString)
        { }

        public bool IsValidUser(User usr)
        {
            try
            {
                using (IDbConnection db = new SqlConnection(ConnectionString))
                {
                    var query = $"SELECT [Id],[Username] FROM Users WHERE [Username] =  '{usr.Username}' " +
                                $"AND [Password] =  '{usr.Password}'";
                    var user = db.Query<User>(query).FirstOrDefault();
                    return user != null;
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }

        }

        public List<User> ReadAll()
        {
            using (IDbConnection db = new SqlConnection(ConnectionString))
            {
                return db.Query<User>("Select * From Users").ToList();
            }
        }
    }
}
