using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web.Http;
using Model.ViewModel;
using Service;
using WebApi.Models;

namespace WebAPI.Controllers
{
    public class AuthController : ApiController
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [Route("api/auth/login")]
        [HttpPost]
        public LoginUserViewModel Post(LoginCommand command)
        {
            var hero=_authService.Login(command.Email, command.Password);
            var encoding = Encoding.GetEncoding("iso-8859-1");
            var hashToken = encoding.GetBytes($"{command.Email}:{command.Password}");
            var loginUserViewModel= new LoginUserViewModel
            {
                Id =hero.Id,
                Email = hero.Email,
                Name = hero.Name,
                Authorization = Convert.ToBase64String(hashToken)
            };
            return loginUserViewModel;
        }
    }

    public class LoginUserViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Authorization { get; set; }
    }

     
}