using System.Configuration;

namespace McqWeb.Services
{
    public class ServiceBase
    {
        protected readonly string ConnectionString =
            ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
    }
}