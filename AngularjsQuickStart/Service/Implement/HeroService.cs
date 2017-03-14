using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
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

        public void AddHero(string name,string email)
        {
            var passwordEncrypt = EncryptPassword("Password1");
            _heroRepository.Add(new Hero()
            {
                Name = name,
                Email = email,
                Password = passwordEncrypt,
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

        private static string EncryptPassword(string password)
        {
            MD5 md5 = new MD5CryptoServiceProvider();
            md5.ComputeHash(ASCIIEncoding.ASCII.GetBytes(password));
            byte[] result = md5.Hash;
            StringBuilder strBuilder = new StringBuilder();
            for (int i = 0; i < result.Length; i++)
            {
                strBuilder.Append(i.ToString("x2"));
            }

            return strBuilder.ToString();
        }
    }
}
