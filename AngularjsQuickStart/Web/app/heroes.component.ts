import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {RouterModule,ActivatedRoute,Router} from '@angular/router';


import {Hero} from './hero';
import {HeroService} from './hero.service';



@Component({
    moduleId:module.id,
    selector:'my-heroes',
    templateUrl:'heroes.component.html',
    styleUrls: ['heroes.component.css']
       
})

export class HeroesComponent implements OnInit{   

    title = 'Tour of Heroes';
    heroes = [];   
    
    hero : Hero={
        Id : 1,
        Name : 'windstorm'
    };

    selectedHero:Hero;
    onSelect(hero:Hero):void{
        this.selectedHero=hero;
    }
    
    constructor(
        private heroService:HeroService,
        private route: ActivatedRoute,
        private router:Router,        
     ){}

    getHeroes():void{
        this.heroService.getHeroesByHttp().then(h=>this.initHeros(h));
    }

    ngOnInit():void{
       this.getHeroes();
    }

    gotoDetail():void{
        this.router.navigate(['/detail',this.selectedHero.Id]);
    }

    add(name:string):void{
        name=name.trim();
        if(!name){return;}
        this.heroService.create(name)
                        .then(hero=>{
                            this.heroes.push(hero);
                            this.selectedHero=null;
                        });
    }

    delete(hero:Hero):void{
        this.heroService.delete(hero.Id)
                        .then(()=>{
                            this.heroes=this.heroes.filter(h=>h!==hero);
                            if(this.selectedHero===hero){
                                this.selectedHero=null;
                            }
                        })
    }

    initHeros(heros):void{
        this.heroes=heros;
        console.log("all heros:", this.heroes);
    }

}



