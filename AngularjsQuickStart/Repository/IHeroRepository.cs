using System.Collections.Generic;
using Data;

namespace Repository
{
    public interface IHeroRepository:IContactBaseRepository<Hero>
    {
        List<Hero> GetHerosByKeywords(string keywords);
        Hero GetHeroByEmailAndPassword(string email, string encryptedPassword);
    }
}
