using System.Collections.Generic;
using System.Linq;
using McqRepository.Models;
using McqRepository.Repositories;

namespace McqWeb.Services
{
    public class PaperService : ServiceBase
    {
        private readonly PaperRepository _paperRepository;

        public PaperService()
        {
            _paperRepository = new PaperRepository(ConnectionString);
        }

        public void Create(PaperMetadata paperMetadata)
        {
            _paperRepository.Insert(paperMetadata);
        }

        public void Update(PaperMetadata paperMetadata)
        {
            _paperRepository.Update(paperMetadata);
        }

        public void Delete(string id)
        {
            _paperRepository.Delete(id);
        }

        public void Publish(string id)
        {
            _paperRepository.Publish(id);
        }

        public void UnPublish(string id)
        {
            _paperRepository.UnPublish(id);
        }

        public IList<PaperMetadata> Fetch()
        {
            return _paperRepository.GetAll()?.ToList();
        }

        public PaperMetadata Fetch(string id)
        {
            return _paperRepository.GetById(id);
        }

        public Papers Fetch(RepositoryFilter filter)
        {
            return _paperRepository.FetchByFilter(filter);
        }
    }
}