using System.Collections.Generic;
using Data;

namespace Service
{
    public interface IHeroService
    {
        List<Hero> GetHeros();
        void AddHero(string name);
        void EditHero(int id, string name);
        void DeleteHero(int id);
    }
}
