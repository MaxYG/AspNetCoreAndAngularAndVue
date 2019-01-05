using AngularQS.Data;
using AngularQS.Data.Models;
using AngularQS.Repository.Repository;

namespace AngularQS.Repository
{
    public class CompanyRepository : BaseRepository<Company>, ICompanyRepository
    {
        public CompanyRepository(AngularQSContext dbDbContext) : base(dbDbContext)
        {
        }
    }
}