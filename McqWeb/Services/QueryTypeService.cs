using System.Collections.Generic;
using System.Linq;
using McqRepository.Models;
using McqRepository.Repositories;

namespace McqWeb.Services
{
    public class QueryTypeService : ServiceBase
    {
        private readonly QueryTypeRepository _queryTypeRepository;

        public QueryTypeService()
        {
            _queryTypeRepository = new QueryTypeRepository(ConnectionString);
        }

        public void Create(string newType)
        {
            _queryTypeRepository.Insert(newType);
        }

        public void Upadate(string id, string name)
        {
            _queryTypeRepository.Update(id, name);
        }

        public void Delete(string id)
        {
            _queryTypeRepository.Delete(id);
        }

        public IList<QueryType> GetAll()
        {
            return _queryTypeRepository.GetAll()?.ToList();
        }

        public QueryTypes Fetch(RepositoryFilter filter)
        {
            return _queryTypeRepository.FetchByFilter(filter);
        }
    }
}