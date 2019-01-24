using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;


namespace AngularQS.WebApi.Controllers
{
//    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UploadController : ControllerBase
    {
        private readonly IHostingEnvironment _hostingEnvironment;

        public UploadController(IHostingEnvironment hostingEnvironment)
        {
            _hostingEnvironment = hostingEnvironment;
        }


        [AllowAnonymous]
        [HttpPost("file")]
        public async Task<JsonResult> UploadFile(IFormFile file)
        {
            
            var filePath = Path.Combine(_hostingEnvironment.ContentRootPath, "Uploads", file.FileName);
            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }
            return new JsonResult("test file upload");
        } 
    }
}