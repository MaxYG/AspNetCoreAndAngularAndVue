using System.Collections.Generic;
using System.Linq;
using Data;
using Repository;

namespace Service.Implement
{
    public class HeroService:IHeroService
    {
        private readonly IHeroRepository _heroRepository;

        public HeroService(IHeroRepository heroRepository)
        {
            _heroRepository = heroRepository;
        }

        public List<Hero> GetHeros()
        {
            var result=_heroRepository.GetAll().ToList();
            return result;
        }

        public void AddHero(string name)
        {
            _heroRepository.Add(new Hero()
            {
                Name = name
            });
        }

        public void EditHero(int id, string name)
        {
            var hero = _heroRepository.Get(id);
            hero.Name = name;
            _heroRepository.Edit(hero);
        }

        public void DeleteHero(int id)
        {
            _heroRepository.Delete(id);
        }

        public List<Hero> GetHerosByKeywords(string keywords)
        {
            var result = _heroRepository.GetHerosByKeywords(keywords).ToList();
            return result;
        }
    }
}
