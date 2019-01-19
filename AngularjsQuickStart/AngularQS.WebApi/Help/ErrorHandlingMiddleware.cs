using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Reflection;
using System.Resources;
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

        public ErrorHandlingMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext httpContext)
        {
            try
            {
                 await  _next(httpContext);
            }
            catch (Exception e)
            {
                await HandleExceptionAsync(httpContext, e);
            }

            
        }

        private Task HandleExceptionAsync(HttpContext context, Exception exception)
        {
            var code = HttpStatusCode.InternalServerError;
            var language = "en-US";
            var languageOfHeader = context.Request.Headers.FirstOrDefault(x => x.Key == "AQSLanguage");
            if (!string.IsNullOrEmpty(languageOfHeader.Value))
            {
                language = languageOfHeader.Value;
            }


            var errorMessage = string.Empty;
            if (exception is CustomerException)
            {
                errorMessage = GetResourceValueByKey(exception.Message, language);
            }
            else if (exception is MyCustomerException)
            {
                errorMessage = exception.Message;
            }
            else
            {
                errorMessage = "";
            }

            var result = JsonConvert.SerializeObject(new { error = errorMessage });
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = (int)code;
            return context.Response.WriteAsync(result);
        }

        private string GetResourceValueByKey(string key,string language)
        {
            ResourceManager rm = new ResourceManager("AngularQS.WebApi.Resources.Resources.SharedResource", typeof(Program).Assembly);
            var culture = new System.Globalization.CultureInfo(language);
            var result=rm.GetString(key, culture);
            return result;
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
