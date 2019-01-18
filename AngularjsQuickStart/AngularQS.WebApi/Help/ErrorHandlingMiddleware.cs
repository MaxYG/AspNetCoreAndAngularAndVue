using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Reflection;
using System.Threading.Tasks;
using AngularQS.Services;
using AngularQS.WebApi.Resources;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Localization;
using Newtonsoft.Json;

namespace AngularQS.WebApi.Help
{
    // You may need to install the Microsoft.AspNetCore.Http.Abstractions package into your project
    public class ErrorHandlingMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly IStringLocalizer<SharedResource> _sharedlocalizer;

        public ErrorHandlingMiddleware(RequestDelegate next, IStringLocalizer<SharedResource> sharedlocalizer)
        {
            _next = next;
            _sharedlocalizer = sharedlocalizer;
        }

        public async Task Invoke(HttpContext httpContext)
        {
            try
            {
                 await  _next(httpContext);
            }
            catch (Exception e)
            {
                await HandleExceptionAsync(httpContext, e, _sharedlocalizer);
            }

            
        }

        private Task HandleExceptionAsync(HttpContext context, Exception exception, IStringLocalizer<SharedResource> sharedLocalizer)
        {
            var code = HttpStatusCode.InternalServerError; 
           
            var errorMessage = string.Empty;
            if (exception is CustomerException)
            {
                errorMessage = sharedLocalizer[exception.Message];
            }else if (exception is MyCustomerException)
            {
                errorMessage = exception.Message;
            }
            else
            {
                errorMessage = "The server has errors, please contact your administrator";
            }

            var result = JsonConvert.SerializeObject(new { error = errorMessage });
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = (int)code;
            return context.Response.WriteAsync(result);
        }
    }

    // Extension method used to add the middleware to the HTTP request pipeline.
    public static class ErrorHandlingMiddlewareExtensions
    {
        public static IApplicationBuilder UseErrorHandlingMiddleware(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<ErrorHandlingMiddleware>();
        }
    }
}
