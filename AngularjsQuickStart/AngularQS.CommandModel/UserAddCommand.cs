using System;
using System.ComponentModel.DataAnnotations;

namespace AngularQS.CommandModel
{
    //            ErrorMessageResourceType = typeof(Resources.SharedResource)
    public class UserCommand{
//        [Required(ErrorMessage = null,
//            ErrorMessageResourceName= "HelloException",
//        ErrorMessageResourceType = typeof(Resources.SharedResource)
//            )]
        [Display(Name = "Userame")]
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
