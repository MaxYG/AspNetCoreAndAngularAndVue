using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using AngularQS.Common;


namespace AngularQS.WebApi.Command
{
    public class CustomerValidationAttribute : RequiredAttribute
    {
        
    }

    public class AddUserCommand
    {

            [Required(ErrorMessage = "HelloException")]
            public string UserName { get; set; }
            public string Password { get; set; }
            public string FirstName { get; set; }
            public string LastName { get; set; }
            public string Description { get; set; }
        
    }
}
