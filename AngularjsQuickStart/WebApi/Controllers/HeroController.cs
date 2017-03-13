using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Model.ViewModel;
using Service;
using WebApi.Models;

namespace WebAPI.Controllers
{
    
    public class HeroController : ApiController
    {
        private readonly IHeroService _heroService;

        public HeroController(IHeroService heroService)
        {
            _heroService = heroService;
        }

        [Route("api/heros")]
        [HttpGet]
        public List<HeroViewModel> GetHeros()
        {
            var result=_heroService.GetHeros().Select(x=>new HeroViewModel()
            {
                Id = x.Id,
                Name = x.Name
            }).ToList();
            return result;
        }

        [Route("api/heros/search-heros")]
        [HttpGet]
        public List<HeroViewModel> GetHeros([FromUri]SearchHero searchHero)
        {
            var result = _heroService.GetHerosByKeywords(searchHero.SearchKeywords).Select(x => new HeroViewModel()
            {
                Id = x.Id,
                Name = x.Name
            }).ToList();
            return result;
        }

        [Route("api/heros")]
        [HttpPost]
        public void Post(HeroCommand command)
        {
            _heroService.AddHero(command.Name);
        }

        [Route("api/heros")]
        [HttpPut]
        public void Put(HeroCommand command)
        {
            _heroService.EditHero(command.Id, command.Name);
        }

        [Route("api/heros/{id}")]
        [HttpDelete]
        public void Delete(int id)
        {
            _heroService.DeleteHero(id);
        }
    }
}
