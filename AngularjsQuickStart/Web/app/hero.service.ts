import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';


import 'rxjs/add/operator/toPromise';

//Injectable 
@Injectable()
export class HeroService {
  
//todo:工厂方法注入可以研究下
  constructor(private http:Http){}

  // getHeroes(): Promise<Hero[]> {
  //   return Promise.resolve(HEROES);
  // }

  getHeroesByHttp(): Promise<Hero[]> {
     const getApi=this.webApiUrl+"api/heros";  
      return this.http.get(getApi)
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

  update(hero:Hero):Promise<Hero>{
    const url = `${this.webApiUrl}/${hero.id}`;

    return this.http.put(url,JSON.stringify(hero),{headers:this.headers})
             .toPromise()
             .then(()=>hero)
             .catch(this.handleError);
  }

  create(name:string):Promise<Hero>{
    return this.http.post(this.webApiUrl,JSON.stringify({name:name}),{headers:this.headers})
                    .toPromise()
                    .then(response=>response.json().data)
                    .catch(this.handleError)

  }
  
  delete(id:number):Promise<Hero>{
    const url = `${this.webApiUrl}/${id}`;
    return this.http.delete(url,{headers:this.headers})
                    .toPromise()
                    .then(()=>null)
                    .catch(this.handleError);
  
  }

  private headers = new Headers({'Content-Type':'application/json'});
  private webApiUrl='http://localhost:36385/';
  private handleError(error:any):Promise<any>{
    console.error("有一个错误出现", error);
    return Promise.reject(error.message || error);
  }
}
