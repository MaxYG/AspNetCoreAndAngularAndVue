using System;
using System.ComponentModel.DataAnnotations;

namespace AngularQS.CommandModel
{
    //            ErrorMessageResourceType = typeof(Resources.SharedResource)
    public class UserCommand{
        /// <summary>
        /// The username is required,
        /// </summary>
        /// <example>xx@xx.com</example>
        [Required(ErrorMessage = "HelloException")]
        public string UserName { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Description { get; set; }
    }

    public class UserAddCommand:UserCommand
    {
        
    }
    public class UserUpdateCommand : UserCommand
    {
        public int Id { get; set; }
    }
}
