using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using AngularQS.Data.Models;
using AngularQS.DomainModel;
using AngularQS.Repository.IRepository;
using AngularQS.Services.IService;

namespace AngularQS.Services.Service
{
    public class UserService:IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public UserDomain Add(UserDomain userDomain)
        {
            var user=_userRepository.Add(new User()
            {
                UserName = userDomain.UserName,
                Password = userDomain.Password
            });
            return new UserDomain()
            {
                Id = user.Id,
                UserName = user.UserName,
                Password = user.Password
            };
        }

        public void Update(User user)
        {
            throw new NotImplementedException();
        }

        public Task<User> GetAsync(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<User> GetList()
        {
            var result=_userRepository.GetList();
            return result;
        }
    }
}
