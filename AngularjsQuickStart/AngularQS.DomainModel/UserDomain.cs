using System;

namespace AngularQS.DomainModel
{
    public class UserDomain:BaseDomain
    {
        public string UserName { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Description { get; set; }
    }
}
