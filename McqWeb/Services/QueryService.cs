using System.Collections.Generic;
using System.Linq;
using McqRepository.Models;
using McqRepository.Repositories;

namespace McqWeb.Services
{
    public class QueryService : ServiceBase
    {
        private readonly QueryRepository _queryRepository;

        public QueryService()
        {
            _queryRepository = new QueryRepository(ConnectionString);
        }

        public void Create(Query query)
        {
            _queryRepository.Insert(query);
        }

        public void Update(Query query)
        {
            _queryRepository.Update(query);
        }

        public void Delete(string id)
        {
            _queryRepository.Delete(id);
        }

        public IList<Query> Fetch()
        {
            return _queryRepository.GetAll()?.ToList();
        }

        public Queries Fetch(RepositoryFilter filter)
        {
            return _queryRepository.FetchByFilter(filter);
        }

        public Queries Fetch(RepositoryFilter filter, string paperId)
        {
            return _queryRepository.FetchByFilter(filter, paperId);
        }
    }
}