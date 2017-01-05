import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';


import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {

  constructor(private http:Http){}

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHeroesByHttp(): Promise<Hero[]> {
      return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response=>response.json().data as Hero[])
      .catch(this.handleError);     
  }

  // getHeroesSlowly(): Promise<Hero[]> {
  //   return new Promise<Hero[]>(resolve =>setTimeout(resolve, 2000))
  //     .then(() => this.getHeroes());
  // }

  getHero(id: number): Promise<Hero> {
    return this.getHeroesByHttp()
               .then(heroes => heroes.find(hero => hero.id === id));
  }

  private heroesUrl='app/heroes';
  private handleError(error:any):Promise<any>{
    console.error("有一个错误出现", error);
    return Promise.reject(error.message || error);
  }
}
