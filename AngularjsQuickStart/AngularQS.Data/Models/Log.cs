using System;
using System.Data;
using AngularQS.Repository;

namespace AngularQS.Data.Models
{
    public class Log : BaseModel
    {
        
        public string MachineName { get; set; }
        public DateTime Logged { get; set; }
        public string Level { get; set; }
        public string Message { get; set; }
        public string Logger { get; set; }
        public string Callsite { get; set; }
        public string Exception { get; set; }
    }
}