using System;

namespace AngularQS.CommandModel
{
    public class UserCommand{
        public string UserName { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Description { get; set; }
    }

    public class UserAddCommand:UserCommand
    {
        
    }
}
