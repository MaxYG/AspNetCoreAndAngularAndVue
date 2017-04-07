/**
 * Created by shinetech-yg on 4/6/2017.
 */

import {Injectable} from "@angular/core";
export class Crisis{
  constructor(public id:number, public name:string){}
}

const CRISES:Crisis[]=[
  new Crisis(1, 'Dragon Burning Cities'),
  new Crisis(2, 'Sky Rains Great White Sharks'),
  new Crisis(3, 'Giant Asteroid Heading For Earth'),
  new Crisis(4, 'Procrastinators Meeting Delayed Again'),
];

const Fetch_Latency=500;

@Injectable()
export class CrisisService{

  getCrises(){
    return new Promise<Crisis[]>(resolve=>{
      setTimeout(()=>{
        resolve(CRISES);
      },Fetch_Latency)
    });
  }

  getCrisis(id:number | string){
    return this.getCrises().then(heroes=>heroes.find(hero=>hero.id===id));
  }
}
