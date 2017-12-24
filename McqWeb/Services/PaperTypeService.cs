using System.Collections.Generic;
using System.Linq;
using McqRepository.Models;
using McqRepository.Repositories;

namespace McqWeb.Services
{
    public class PaperTypeService : ServiceBase
    {
        private readonly PaperTypeRepository _paperTypeRepository;

        public PaperTypeService()
        {
            _paperTypeRepository = new PaperTypeRepository(ConnectionString);
        }

        public void Create(string newType)
        {
            _paperTypeRepository.Insert(newType);
        }

        public void Upadate(string id, string name)
        {
            _paperTypeRepository.Update(id, name);
        }

        public void Delete(string id)
        {
            _paperTypeRepository.Delete(id);
        }

        public IList<PaperType> GetAll()
        {
            return _paperTypeRepository.GetAll()?.ToList();
        }

        public PaperCategories Fetch(RepositoryFilter filter)
        {
            return _paperTypeRepository.FetchByFilter(filter);
        }
        
    }
}