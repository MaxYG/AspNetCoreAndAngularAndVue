﻿using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Model.ViewModel;
using Service;

namespace WebAPI.Controllers
{
    
    public class HeroController : ApiController
    {
        private readonly IHeroService _heroService;

        public HeroController(IHeroService heroService)
        {
            _heroService = heroService;
        }
        
        public List<HeroViewModel> Get()
        {
            var result=_heroService.GetHeros().Select(x=>new HeroViewModel()
            {
                Id = x.Id,
                Name = x.Name
            }).ToList();
            return result;
        }
        
        public void Post(HeroCommand command)
        {
            _heroService.AddHero(command.Name);
        }

       
        public void Put(HeroCommand command)
        {
            _heroService.EditHero(command.Id, command.Name);
        }
        
        public void Delete(int id)
        {
            _heroService.DeleteHero(id);
        }
    }
}