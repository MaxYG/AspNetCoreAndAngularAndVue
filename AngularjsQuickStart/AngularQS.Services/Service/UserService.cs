using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using AngularQS.Data.Models;
using AngularQS.DomainModel;
using AngularQS.Repository;
using AngularQS.Repository.Repository;
using AngularQS.Services.IService;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using NLog;

namespace AngularQS.Services.Service
{
    public class UserService:IUserService
    {
        private readonly IUserRepository _userRepository;
        private readonly ICompanyRepository _companyRepository;
        private readonly ILogger<UserService> _logger;
        private readonly IUnitOfWork _unitOfWork;

        public UserService(IUserRepository userRepository, ICompanyRepository companyRepository,
            ILogger<UserService> logger, IUnitOfWork unitOfWork)
        {
            _userRepository = userRepository;
            _companyRepository = companyRepository;
            _logger = logger;
            _unitOfWork = unitOfWork;
        }

        public User Authenticate(string username, string password,string secret)
        {
            var user = _userRepository.GetUsernameAndPassword(username,password);

            // return null if user not found
            if (user == null)
                return null;
        
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.Id.ToString())
                }),
                Expires = DateTime.Now.AddDays(30),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            user.Token = tokenHandler.WriteToken(token);

            // remove password before returning
            user.Password = null;

            return user;
        }

        public UserDomain Add(UserDomain userDomain)
        {
            var user = new User()
            {
                UserName = userDomain.UserName,
                Password = userDomain.Password,
                FirstName = userDomain.FirstName,
                LastName = userDomain.LastName,
                Description = userDomain.Description,
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

        public void Update(UserDomain userDomain)
        {
            var user = _userRepository.Get(userDomain.Id);
            user.UserName = userDomain.UserName;
            user.FirstName = userDomain.FirstName;
            user.LastName = userDomain.LastName;
            user.Description = userDomain.Description;

            _userRepository.Edit(user);
            _unitOfWork.SaveChanges();
        }

        public Task<User> GetAsync(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<User> GetList()
        {
//            throw new CustomerException(ConstantHelp.HelloExceptionKey);
            _logger.LogInformation("test log info to database for info");
            _logger.LogError("test log info to database for error");
            var result = _userRepository.GetAll();
            return result;
        }

        public void Delete(int id)
        {
           _userRepository.Delete(id);
            _unitOfWork.SaveChanges();
        }
    }
}
