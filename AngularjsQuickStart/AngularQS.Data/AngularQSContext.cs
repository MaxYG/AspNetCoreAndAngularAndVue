using System;
using System.Collections.Generic;
using System.Text;
using AngularQS.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace AngularQS.Data
{
    public class AngularQSContext : DbContext
    {
        public AngularQSContext(DbContextOptions<AngularQSContext> options)
            : base(options)
        { }

        public DbSet<User> Users { get; set; }
    }
}
