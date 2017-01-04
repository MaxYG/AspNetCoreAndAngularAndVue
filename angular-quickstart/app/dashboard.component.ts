import {Component,OnInit} from '@angular/core';

import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
    moduleId:module.id,
    selector:'my-dashboard',
    templateUrl:'dashboard.component.html'
})

export class DashboardComponent{
    heroes:Hero[]=[];
    constructor(private heroService:HeroService){}
    ngOnInit():void{
        this.heroService.getHeroesSlowly().then(h=>this.heroes=h.splice(1,5));
    }
}