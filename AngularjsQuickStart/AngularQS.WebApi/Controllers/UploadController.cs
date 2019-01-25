using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.FileProviders;


namespace AngularQS.WebApi.Controllers
{
//    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UploadController : ControllerBase
    {
        private readonly IHostingEnvironment _hostingEnvironment;
        private readonly IFileProvider _fileProvider;

        public UploadController(IHostingEnvironment hostingEnvironment, IFileProvider fileProvider)
        {
            _hostingEnvironment = hostingEnvironment;
            _fileProvider = fileProvider;
        }

        [AllowAnonymous]
        [HttpPost("file")]
        public async Task<string> UploadFile(IFormFile file)
        {
            
            var filePath = Path.Combine(_hostingEnvironment.ContentRootPath, "UploadFiles", file.FileName);
            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }
           
            return "http://"+Request.Host.Value.ToString()+ "/StaticFiles/"+file.FileName;
        }

        [AllowAnonymous]
        [HttpGet("get")]
        public ActionResult GetFile()
        {
            var aa = Request;
            var contents = _fileProvider.GetDirectoryContents("");
            var filePath = Path.Combine(_hostingEnvironment.ContentRootPath, "UploadFiles", "personImage.png");
            var b = System.IO.File.ReadAllBytes(filePath);
            return File(b, "image/png");
        }
    }
}