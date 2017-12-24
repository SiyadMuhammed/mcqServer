using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using McqRepository.Models;
using McqWeb.Services;
using McqWeb.Models;
using PaperMetadata = McqWeb.Models.PaperMetadata;

namespace McqWeb.Controllers
{
    public class PaperController : BaseApiController
    {
        private readonly PaperService _paperService;
        private readonly ModelValidationService _modelValidationService;
        private readonly ModelConversionService _modelConversionService;

        public PaperController()
        {
            _paperService = new PaperService();
            _modelValidationService = new ModelValidationService();
            _modelConversionService = new ModelConversionService();
        }

        [HttpPost]
        [Route("api/paper")]
        public HttpResponseMessage Create(PaperMetadata data)
        {
            return WrapInTryCatch(() =>
            {
                if (!_modelValidationService.IsValidModel(data))
                    throw new ArgumentNullException();

                _paperService.Create(_modelConversionService.ConvertToRepositoryModel(data));
                return new HttpResponseMessage(HttpStatusCode.Created);
            });
        }

        [HttpPut]
        [Route("api/paper/{id}")]
        public HttpResponseMessage Create(Guid id, PaperMetadata data)
        {
            return WrapInTryCatch(() =>
            {
                if (!_modelValidationService.IsValidModel(data))
                    throw new ArgumentNullException();

                data.Id = id;
                _paperService.Update(_modelConversionService.ConvertToRepositoryModel(data));
                return new HttpResponseMessage(HttpStatusCode.Created);
            });
        }

        [HttpPut]
        [Route("api/paper/{id}/publish")]
        public HttpResponseMessage Publish(string id)
        {
            return WrapInTryCatch(() =>
            {
                _paperService.Publish(id);
                return new HttpResponseMessage(HttpStatusCode.OK);
            });
        }

        [HttpPut]
        [Route("api/paper/{id}/unPublish")]
        public HttpResponseMessage UnPublish(string id)
        {
            return WrapInTryCatch(() =>
            {
                _paperService.UnPublish(id);
                return new HttpResponseMessage(HttpStatusCode.OK);
            });
        }

        [HttpDelete]
        [Route("api/paper/{id}")]
        public HttpResponseMessage Delete(string id)
        {
            return WrapInTryCatch(() =>
            {
                if (string.IsNullOrEmpty(id))
                    throw new ArgumentNullException();

                _paperService.Delete(id);
                return new HttpResponseMessage(HttpStatusCode.OK);
            });
        }

        [HttpGet]
        [Route("api/paper/{id}")]
        public McqRepository.Models.PaperMetadata FetchById(string id)
        {
            return _paperService.Fetch(id);
        }

        [HttpGet]
        [Route("api/paper/all")]
        public IList<McqRepository.Models.PaperMetadata> GetAll()
        {
            return _paperService.Fetch();
        }

        [HttpGet]
        [Route("api/paper")]
        public Papers Fetch([FromUri]Filter filters)
        {
            if (!_modelValidationService.IsValidModel(filters))
                throw new ArgumentNullException();

            var respositoryFilter = _modelConversionService.ConvertToRepositoryModel(filters);
            return _paperService.Fetch(respositoryFilter);
        }
    }
}
