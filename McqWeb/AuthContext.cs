using Microsoft.AspNet.Identity.EntityFramework;

namespace McqWeb
{
    public class AuthContext : IdentityDbContext<IdentityUser>
    {
        public AuthContext()
            : base("AuthContext")
        {

        }
    }
}