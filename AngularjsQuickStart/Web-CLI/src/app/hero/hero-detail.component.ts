import 'rxjs/add/operator/switchMap';
import { Component, OnInit,Input }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Hero }         from './hero';
import { HeroService }  from './hero.service';

@Component({    
    selector:'my-hero-detail',
    templateUrl:'hero-detail.component.html',
    styleUrls:['hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit{
        
    hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
   
    goBack():void{
        this.location.back();
    }
    
    ngOnInit(): void {
        this.route.params
        .switchMap((params: Params) => this.heroService.getHero(+params['Id']))
        .subscribe(hero => this.getHero(hero));
    }
    
    getHero(hero):void{
        this.hero = hero
    }

    get debug(){
        return JSON.stringify(this.hero);
    }

    save():void{
        this.heroService.update(this.hero).then(()=>this.goBack());
    }
}












