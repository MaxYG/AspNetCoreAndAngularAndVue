using System;
using System.Collections.Generic;
using System.Text;

namespace AngularQS.Services
{
    public class CustomerException:Exception
    {
        public CustomerException()
        {
        }

        public CustomerException(string message)
            : base(message)
        {
        }

        public CustomerException(string message, Exception inner)
            : base(message, inner)
        {
        }
    }

    
}
