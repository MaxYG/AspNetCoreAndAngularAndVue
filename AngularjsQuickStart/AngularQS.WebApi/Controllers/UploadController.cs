using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularQS.WebApi.Controllers
{
//    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UploadController : ControllerBase
    {
        [AllowAnonymous]
        [HttpPost("upload-file")]
        public JsonResult UploadFile(IFormFile file)
        {
            var request = HttpContext.Request;
           // var file1 = file;
          
            return new JsonResult("test file upload");
        }

       
    }

    public class CommandFile
    {
        public string ContentType { get; set; }
        public string Date { get; set; }
        public string Name { get; set; }
        public long Length { get; set; }
    }
}