import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Hero }         from './hero';
import { HeroService }  from './hero.service';



@Component({
    moduleId:module.id,
    selector:'my-hero-detail',
    templateUrl:'hero-detail.component.html'
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

    ngOnInit():void{
        this.route.params.switchMap((params:Params)=>this.heroService.getHero(+params['id']))
        .subscribe(herodetail=>this.hero=herodetail);
    }


}