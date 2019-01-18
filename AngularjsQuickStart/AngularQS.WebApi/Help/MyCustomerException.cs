using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularQS.WebApi.Help
{
    public class MyCustomerException : Exception
    {
        public MyCustomerException()
        {
        }

        public MyCustomerException(string message)
            : base(message)
        {
        }

        public MyCustomerException(string message, Exception inner)
            : base(message, inner)
        {
        }
    }
}
