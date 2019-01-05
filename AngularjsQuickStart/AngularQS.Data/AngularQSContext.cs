using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using AngularQS.Data.Models;
using AngularQS.Repository;
using Microsoft.EntityFrameworkCore;

namespace AngularQS.Data
{
    public class AngularQSContext : DbContext, IUnitOfWork
    {
        public AngularQSContext(DbContextOptions<AngularQSContext> options)
            : base(options)
        { }

        public DbSet<User> Users { get; set; }
        public DbSet<Company> Companies { get; set; }
       
    }
}
