using System.Linq;
using AngularQS.Data;
using AngularQS.Data.Models;

namespace AngularQS.Repository.Repository
{
    public class UserRepository:BaseRepository<User>,IUserRepository
    {
        private readonly AngularQSContext _dbDbContext;

        public UserRepository(AngularQSContext dbDbContext) : base(dbDbContext)
        {
            _dbDbContext = dbDbContext;
        }

        public User GetUserByName(string name)
        {
            return _dbDbContext.Users.FirstOrDefault(x => x.UserName.Equals(name));
        }
    }
}