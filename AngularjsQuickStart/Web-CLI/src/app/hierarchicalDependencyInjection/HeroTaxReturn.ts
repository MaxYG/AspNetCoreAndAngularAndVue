/**
 * Created by shinetech-yg on 5/12/2017.
 */
import { Injectable }    from '@angular/core';
import { Hero } from '../hero/hero';

export class HeroTax{
  id:number;
  name:string;
  tid:string;
}

let nextId=100;

@Injectable()
export class HeroTaxReturn {
  constructor(
    public id=nextId++,
    public heroTax:HeroTax,
    public income=0
  ){
    if(id===0) {
      id=nextId++;
    }
  }

  get name(){return this.heroTax.name;}
  get tax(){return this.income?.10 * this.income:0;}
  get tid(){return this.heroTax.tid;}
  toString(){
    return `$(this.heroTax.name)`;
  }
  clone(){
    return new HeroTaxReturn(this.id,this.heroTax,this.income);
  }
}


