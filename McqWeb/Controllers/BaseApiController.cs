using System;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace McqWeb.Controllers
{
    public class BaseApiController : ApiController
    {
        protected static HttpResponseMessage WrapInTryCatch(Func<HttpResponseMessage> method)
        {
            try
            {
                return method();
            }
            catch (Exception)
            {
                return new HttpResponseMessage(HttpStatusCode.InternalServerError);
            }
        }
    }
}
