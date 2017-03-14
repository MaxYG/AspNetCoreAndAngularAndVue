using System.Collections.Generic;
using System.Linq;
using Data;

namespace Repository.Implement
{
    public class HeroRepository : BaseRepository<Hero>,IHeroRepository
    {
        public HeroRepository(IDbContextProvider dbContextProvider) : base(dbContextProvider)
        {
        }

        public List<Hero> GetHerosByKeywords(string keywords)
        {
            return DbContext.Heros.Where(x => x.Name.Contains(keywords)).ToList();
        }
    }
}