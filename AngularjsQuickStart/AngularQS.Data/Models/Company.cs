using System;
using System.Collections.Generic;
using System.Text;
using AngularQS.Repository;

namespace AngularQS.Data.Models
{
    public  class Company : BaseModel
    {
        public string Name { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
    }
}
