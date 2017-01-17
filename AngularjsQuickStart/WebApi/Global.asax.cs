using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Dispatcher;
using System.Web.Routing;
using WebAPI.Installer;

namespace WebApi
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            
            WindsorBootstrapper.Initialize();

            GlobalConfiguration.Configuration.Services.Replace(typeof(IHttpControllerActivator),
               new WindsorCompositionRoot(WindsorBootstrapper.Container));

            GlobalConfiguration.Configure(WebApiConfig.Register);
           
        }
    }
}
