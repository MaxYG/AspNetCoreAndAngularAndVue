using System.Collections.Generic;
using System.Linq;
using AngularQS.Data.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace AngularQS.Repository.Repository
{
    public interface IUserRepository : IRepository<User>
    {
        User GetUserByName(string name);
    }
}
