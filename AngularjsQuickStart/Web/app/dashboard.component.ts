import {Component,OnInit} from '@angular/core';

import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
    moduleId:module.id,
    selector:'my-dashboard',
    templateUrl:'dashboard.component.html',
    styleUrls:['dashboard.component.css']
})

export class DashboardComponent implements OnInit{
    heroes:Hero[]=[];
    constructor(private heroService:HeroService){}
    ngOnInit():void{
        this.heroService.getHeroesByHttp().then(
            h=>this.getHeroSplice(h)
        );        
    }
    
    getHeroSplice(h):void{
        //todo:
        //let oldHeroBackup=Object.assign([], h); 
        //console.log({old:"old",oldHero:oldHeroBackup});
        if(h){
            this.heroes = h.splice(1, 5);
        }
        
        //console.log({new:"new",newHero:this.heroes});
    }
}