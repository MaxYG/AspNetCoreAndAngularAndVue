using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using AngularQS.Data;
using AngularQS.Data.Models;
using AngularQS.Repository.IRepository;
using Microsoft.EntityFrameworkCore.Extensions.Internal;

namespace AngularQS.Repository.Repository
{
    public class UserRepository:IUserRepository
    {
        private readonly AngularQSContext _context;
        public IUnitOfWork UnitOfWork => _context;

        public UserRepository(AngularQSContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        public User Add(User user)
        {
            var result=_context.Users.Add(user).Entity;
            return result;
        }

        public void Update(User user)
        {
            throw new NotImplementedException();
        }

        public async Task<User> GetAsync(int id)
        {
            var result= await _context.Users.FindAsync(id);
            return result;
        }

        public IEnumerable<User> GetList()
        {
            var results = _context.Users;
            return results;
        }
    }
}
