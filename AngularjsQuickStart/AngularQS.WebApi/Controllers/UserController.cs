using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularQS.CommandModel;
using AngularQS.DomainModel;
using AngularQS.Services.IService;
using AngularQS.WebApi.ViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularQS.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }
        
        [HttpPost]
        public void Post([FromBody]UserAddCommand userAddCommand)
        {
            _userService.Add(new UserDomain()
            {
                UserName = userAddCommand.UserName,
                Password = userAddCommand.Password,
            });
        }

        [HttpGet]
        public ActionResult<IEnumerable<UserViewModel>> Gets()
        {
            var result = _userService.GetList().Select(x => new UserViewModel()
            {
                Id = x.Id,
                UserName = x.UserName,
                Password = x.Password
            });

            return new ActionResult<IEnumerable<UserViewModel>>(result);
        }
    }
}