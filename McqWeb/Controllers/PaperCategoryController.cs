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
    public class PaperCategoryController : BaseApiController
    {
        private readonly PaperTypeService _paperTypeService;
        private readonly ModelValidationService _modelValidationService;
        private readonly ModelConversionService _modelConversionService;

        public PaperCategoryController()
        {
            _paperTypeService = new PaperTypeService();
            _modelValidationService = new ModelValidationService();
            _modelConversionService = new ModelConversionService();
        }

        [HttpPost]
        [Route("api/paperCategory")]
        public HttpResponseMessage Create(NameModel data)
        {
            return WrapInTryCatch(() =>
            {
                if (string.IsNullOrEmpty(data.Name))
                    throw new ArgumentNullException();

                _paperTypeService.Create(data.Name);
                return new HttpResponseMessage(HttpStatusCode.Created);
            });
        }

        [HttpPut]
        [Route("api/paperCategory/{id}")]
        public HttpResponseMessage Update(string id, NameModel data)
        {
            return WrapInTryCatch(() =>
            {
                if (string.IsNullOrEmpty(id) || string.IsNullOrEmpty(data.Name))
                    throw new ArgumentNullException();

                _paperTypeService.Upadate(id, data.Name);
                return new HttpResponseMessage(HttpStatusCode.OK);
            });
        }

        [HttpDelete]
        [Route("api/paperCategory/{id}")]
        public HttpResponseMessage Delete(string id)
        {
            return WrapInTryCatch(() =>
            {
                if (string.IsNullOrEmpty(id))
                    throw new ArgumentNullException();

                _paperTypeService.Delete(id);
                return new HttpResponseMessage(HttpStatusCode.OK);
            });
        }

        [HttpGet]
        [Route("api/paperCategory/all")]
        public IList<PaperType> Fetch()
        {
            return _paperTypeService.GetAll();
        }

        [HttpGet]
        [Route("api/paperCategory")]
        public PaperCategories Fetch([FromUri]Filter filters)
        {
            if (!_modelValidationService.IsValidModel(filters))
                throw new ArgumentNullException();

            var respositoryFilter = _modelConversionService.ConvertToRepositoryModel(filters);
            return _paperTypeService.Fetch(respositoryFilter);
        }
    }
}
