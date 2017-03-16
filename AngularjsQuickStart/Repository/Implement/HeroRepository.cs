using System;
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

        public Hero GetHeroByEmailAndPassword(string email, string encryptedPassword)
        {
            return DbContext.Heros.FirstOrDefault(x => x.Email.Equals(email, StringComparison.OrdinalIgnoreCase) && x.Password.Equals(encryptedPassword,StringComparison.OrdinalIgnoreCase));
        }
    }
}