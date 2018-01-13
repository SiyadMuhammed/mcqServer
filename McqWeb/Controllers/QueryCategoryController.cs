using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using McqRepository.Models;
using McqWeb.Models;
using McqWeb.Services;

namespace McqWeb.Controllers
{
    [Authorize]
    public class QueryCategoryController : BaseApiController
    {
        private readonly QueryTypeService _queryTypeService;
        private readonly ModelValidationService _modelValidationService;
        private readonly ModelConversionService _modelConversionService;

        public QueryCategoryController()
        {
            _queryTypeService = new QueryTypeService();
            _modelValidationService = new ModelValidationService();
            _modelConversionService = new ModelConversionService();
        }

        [HttpPost]
        [Route("api/queryCategory")]
        public HttpResponseMessage Create(NameModel data)
        {
            return WrapInTryCatch(() =>
            {
                if (string.IsNullOrEmpty(data.Name))
                    throw new ArgumentNullException();

                _queryTypeService.Create(data.Name);
                return new HttpResponseMessage(HttpStatusCode.Created);
            });
        }

        [HttpPut]
        [Route("api/queryCategory/{id}")]
        public HttpResponseMessage Update(string id, NameModel data)
        {
            return WrapInTryCatch(() =>
            {
                if (string.IsNullOrEmpty(id) || string.IsNullOrEmpty(data.Name))
                    throw new ArgumentNullException();

                _queryTypeService.Upadate(id, data.Name);
                return new HttpResponseMessage(HttpStatusCode.OK);
            });
        }

        [HttpDelete]
        [Route("api/queryCategory/{id}")]
        public HttpResponseMessage Delete(string id)
        {
            return WrapInTryCatch(() =>
            {
                if (string.IsNullOrEmpty(id))
                    throw new ArgumentNullException();

                _queryTypeService.Delete(id);
                return new HttpResponseMessage(HttpStatusCode.OK);
            });
        }

        [HttpGet]
        [Route("api/queryCategory/all")]
        public IList<QueryType> Fetch()
        {
            return _queryTypeService.GetAll();
        }

        [HttpGet]
        [Route("api/queryCategory")]
        public QueryTypes Fetch([FromUri]Filter filters)
        {
            if (!_modelValidationService.IsValidModel(filters))
                throw new ArgumentNullException();

            var respositoryFilter = _modelConversionService.ConvertToRepositoryModel(filters);
            return _queryTypeService.Fetch(respositoryFilter);
        }
    }
}
