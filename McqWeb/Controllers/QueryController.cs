using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using McqRepository.Models;
using McqWeb.Services;
using McqWeb.Models;
using Query = McqWeb.Models.Query;

namespace McqWeb.Controllers
{
    [Authorize]
    public class QueryController : BaseApiController
    {
        private readonly QueryService _queryService;
        private readonly ModelValidationService _modelValidationService;
        private readonly ModelConversionService _modelConversionService;

        public QueryController()
        {
            _queryService = new QueryService();
            _modelValidationService = new ModelValidationService();
            _modelConversionService = new ModelConversionService();
        }

        [HttpPost]
        [Route("api/query")]
        public HttpResponseMessage Create(Query data)
        {
            return WrapInTryCatch(() =>
            {
                if (!_modelValidationService.IsValidModel(data))
                    throw new ArgumentNullException();

                _queryService.Create(_modelConversionService.ConvertToRepositoryModel(data));
                return new HttpResponseMessage(HttpStatusCode.Created);
            });
        }

        [HttpPut]
        [Route("api/query/{id}")]
        public HttpResponseMessage Create(Guid id, Query data)
        {
            return WrapInTryCatch(() =>
            {
                if (!_modelValidationService.IsValidModel(data))
                    throw new ArgumentNullException();

                data.Id = id;
                _queryService.Update(_modelConversionService.ConvertToRepositoryModel(data));
                return new HttpResponseMessage(HttpStatusCode.Created);
            });
        }

        [HttpDelete]
        [Route("api/query/{id}")]
        public HttpResponseMessage Delete(string id)
        {
            return WrapInTryCatch(() =>
            {
                if (string.IsNullOrEmpty(id))
                    throw new ArgumentNullException();

                _queryService.Delete(id);
                return new HttpResponseMessage(HttpStatusCode.OK);
            });
        }

        [HttpGet]
        [Route("api/query/all")]
        public IList<McqRepository.Models.Query> GetAll()
        {
            return _queryService.Fetch();
        }

        [HttpGet]
        [Route("api/query")]
        public Queries Fetch([FromUri]Filter filters)
        {
            if (!_modelValidationService.IsValidModel(filters))
                throw new ArgumentNullException();

            var respositoryFilter = _modelConversionService.ConvertToRepositoryModel(filters);
            return _queryService.Fetch(respositoryFilter);
        }

        [HttpGet]
        [Route("api/query/{id}")]
        public Queries Fetch(string id, [FromUri]Filter filters)
        {
            if (!_modelValidationService.IsValidModel(filters))
                throw new ArgumentNullException();

            var respositoryFilter = _modelConversionService.ConvertToRepositoryModel(filters);
            return _queryService.Fetch(respositoryFilter, id);
        }
    }
}
