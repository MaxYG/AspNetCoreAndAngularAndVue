using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using AngularQS.Data.Models;
using AngularQS.DomainModel;
using AngularQS.Repository;
using AngularQS.Repository.Repository;
using AngularQS.Services.IService;

namespace AngularQS.Services.Service
{
    public class UserService:IUserService
    {
        private readonly IUserRepository _userRepository;
        private readonly ICompanyRepository _companyRepository;
        private readonly IUnitOfWork _unitOfWork;

        public UserService(IUserRepository userRepository, ICompanyRepository companyRepository,
            IUnitOfWork unitOfWork)
        {
            _userRepository = userRepository;
            _companyRepository = companyRepository;
            _unitOfWork = unitOfWork;
        }

        public UserDomain Add(UserDomain userDomain)
        {
            var user = new User()
            {
                UserName = userDomain.UserName,
                Password = userDomain.Password
            };
            _userRepository.Add(user);

            var company=new Company()
            {
                Name = "company1",
            };
            _companyRepository.Add(company);
            _unitOfWork.SaveChanges();
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
            return new List<User>();
            /*var result=_userRepository.
            return result;*/
        }
    }
}
