using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc.ModelBinding.Metadata;

namespace AngularQS.Common
{
    public class AppSettings
    {
        public string Secret { get; set; }
    }


    /*public class DisplayNameDetailsProvider : IDisplayMetadataProvider
    {
        public void CreateDisplayMetadata(DisplayMetadataProviderContext context)
        {
            var displayAttribute = context.Attributes.OfType<MyDisplayNameAttribute>().FirstOrDefault();
            if (displayAttribute != null)
            {
                context.DisplayMetadata.DisplayName = () => displayAttribute.DisplayName;
            }
        }
    }*/
    public class MyDisplayNameAttribute : Attribute
    {
        public MyDisplayNameAttribute(string displayName)
        {
            DisplayName = displayName;
        }

        public string DisplayName { get; set; }
    }

}
