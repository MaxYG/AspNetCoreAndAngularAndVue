using Data;

namespace Service
{
    public interface IAuthService
    {
        Hero Login(string email, string password);
    }
}