using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using AngularQS.Data.Models;

namespace AngularQS.Repository.IRepository
{
    public interface IUserRepository : IRepository<User>
    {
        User Add(User user);
        void Update(User user);
        Task<User> GetAsync(int id);
        IEnumerable<User> GetList();
    }
}
