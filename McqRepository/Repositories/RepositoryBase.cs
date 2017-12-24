namespace McqRepository.Repositories
{
    public class RepositoryBase
    {
        protected readonly string ConnectionString;

        public RepositoryBase(string connectionString)
        {
            ConnectionString = connectionString;
        }
    }
}
