using Common;
using Data;
using Repository;

namespace Service.Implement
{
    public class AuthService : IAuthService
    {
        private readonly IHeroRepository _heroRepository;

        public AuthService(IHeroRepository heroRepository)
        {
            _heroRepository = heroRepository;
        }

        public Hero Login(string email, string password)
        {
            var encryptedPassword= EncryptPasswordProvider.EncryptPassword(password);
            return _heroRepository.GetHeroByEmailAndPassword(email,encryptedPassword);
        }
    }
}