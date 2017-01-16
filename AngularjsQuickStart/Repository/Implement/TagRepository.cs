using Data;

namespace Repository.Implement
{
    public class HeroRepository : BaseRepository<Hero>,IHeroRepository
    {
        public HeroRepository(IDbContextProvider dbContextProvider) : base(dbContextProvider)
        {
        }
    }
}