using McqRepository.Models;
using McqRepository.Repositories;
using McqWeb.Models;

namespace McqWeb.Services
{
    public class UserService : ServiceBase
    {
        private readonly UserRepository _userRepository;

        public UserService()
        {
            _userRepository = new UserRepository(ConnectionString);
        }

        public bool IsValidUser(UserLogin usr)
        {
            var user = new User
            {
                Username = usr.Username,
                Password = usr.Password
            };
            var result = _userRepository.IsValidUser(user);
            return result;
        }
    }
}