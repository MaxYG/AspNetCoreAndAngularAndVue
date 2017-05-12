/**
 * Created by shinetech-yg on 5/12/2017.
 */

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { HeroTax, HeroTaxReturn } from "./HeroTaxReturn";
@Injectable()
export class HeroTaxService {
  heroTaxs: HeroTax[] = [
    { id: 1, name: 'RubberMan', tid: '082-27-5678'},
    { id: 2, name: 'Tornado',   tid: '099-42-4321'}
  ];

  heroTaxReturns:HeroTaxReturn[]=[
    new HeroTaxReturn(10,this.heroTaxs[0],35000),
    new HeroTaxReturn(20,this.heroTaxs[1],123000),
  ];

  getHeroTaxs():Observable<HeroTax[]>{
    return new Observable<HeroTax[]>((observer:Observer<HeroTax[]>)=>{
      observer.next(this.heroTaxs);
      observer.complete();
    });
  }

  getTaxReturn(heroTax:HeroTax):Observable<HeroTaxReturn>{
    return new Observable<HeroTaxReturn>((observer:Observer<HeroTaxReturn>)=>{
      const htr=this.heroTaxReturns.find(t=>t.heroTax.id==heroTax.id);
      observer.next(htr||new HeroTaxReturn(0,heroTax));
      observer.complete();
    });
  }

  saveTaxReturn(heroTaxReturn:HeroTaxReturn):Observable<HeroTaxReturn>{
    return new Observable<HeroTaxReturn>((observer:Observer<HeroTaxReturn>)=>{
      const htr=this.heroTaxReturns.find(t=>t.heroTax.id==heroTaxReturn.id);
      if(htr){
        heroTaxReturn=Object.assign(htr,heroTaxReturn);
      }else{
        this.heroTaxReturns.push(heroTaxReturn);
      }
      observer.next(heroTaxReturn);
      observer.complete();
    });
  }



}
