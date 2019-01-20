using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularQS.CommandModel;
using AngularQS.Common;
using AngularQS.DomainModel;
using AngularQS.Services.IService;
using AngularQS.WebApi.Command;
using AngularQS.WebApi.Help;
using AngularQS.WebApi.Resources;
using AngularQS.WebApi.ViewModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Localization;
using Microsoft.Extensions.Options;

namespace AngularQS.WebApi.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly IConfiguration _config;
        private readonly IStringLocalizer<SharedResource> _sharedlocalizer;
        private readonly IStringLocalizer<UserController> _localizer;

        public UserController(IUserService userService, IConfiguration config,
            IStringLocalizer<SharedResource> sharedlocalizer,
            IStringLocalizer<UserController> localizer)
        {
            _userService = userService;
            _config = config;
            _sharedlocalizer = sharedlocalizer;
            _localizer = localizer;
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public IActionResult Authenticate([FromBody]UserAddCommand userParam)
        {
            var appSettings = new AppSettings();
            _config.GetSection("AppSettings").Bind(appSettings);
            var user = _userService.Authenticate(userParam.UserName, userParam.Password, appSettings.Secret);

            if (user == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            return Ok(user);
        }

        [HttpGet("test")]
        public JsonResult GetTest()
        {
            //throw new MyCustomerException(_sharedlocalizer["Hello xxx"]);
            var result= _sharedlocalizer["Hello xxx"];
            return new JsonResult(result);
        }

        [HttpGet("all")]
        public ActionResult<IEnumerable<UserViewModel>> Gets()
        {
            var result = _userService.GetList().Select(x => new UserViewModel()
            {
                Id = x.Id,
                UserName = x.UserName,
                FirstName = x.FirstName,
                LastName = x.LastName,
                Description = x.Description
            });

            return new ActionResult<IEnumerable<UserViewModel>>(result);
        }

        [HttpPost("add")]
        public void Add([FromBody] AddUserCommand userAddCommand)
        {
            _userService.Add(new UserDomain()
            {
                UserName = userAddCommand.UserName,
                FirstName = userAddCommand.FirstName,
                LastName = userAddCommand.LastName,
                Description = userAddCommand.Description,
                Password = userAddCommand.Password
            });
        }

        [HttpPut("update")]
        public void Update([FromBody] UserUpdateCommand userUpdateCommand)
        {
            _userService.Update(new UserDomain()
            {
                Id = userUpdateCommand.Id,
                UserName = userUpdateCommand.UserName,
                FirstName = userUpdateCommand.FirstName,
                LastName = userUpdateCommand.LastName,
                Description = userUpdateCommand.Description
                
            });
        }


        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _userService.Delete(id);
        }
    }
}