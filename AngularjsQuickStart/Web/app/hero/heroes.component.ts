import {Component,ViewChild } from '@angular/core';
import {OnInit} from '@angular/core';
import {RouterModule,ActivatedRoute,Router} from '@angular/router';
import { ModalDirective } from 'ng2-bootstrap';


import {Hero} from './hero';
import {HeroService} from './hero.service';



@Component({
    moduleId:module.id,
    selector:'my-heroes',
    templateUrl:'heroes.component.html',
    styleUrls: ['heroes.component.css']
       
})

export class HeroesComponent implements OnInit{   
    @ViewChild('lgModal') public addHeroModal:ModalDirective;
    heroes = [];   
    
    hero : Hero={Id:0,Name:""};   
    // selectedHero:Hero;
    // onSelect(hero:Hero):void{
    //     this.selectedHero=hero;
    // }

    cleanHeroValue(){
        this.hero={Id:0,Name:""};
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

    // gotoDetail():void{
    //     this.router.navigate(['/detail',this.selectedHero.Id]);
    // }

    // add(name:string):void{
    //     name=name.trim();
    //     if(!name){return;}
    //     this.heroService.create(name)
    //                     .then(hero=>{
    //                         this.heroes.push(hero);
    //                         this.selectedHero=null;
    //                     });
    // }


    save():void{          
        this.heroService.create(this.hero)
                        .then(hero=>{                           
                            this.getHeroes();
                            this.cleanHeroValue();
                            this.addHeroModal.hide();
                        });                      
    }

    delete(hero:Hero):void{
        this.heroService.delete(hero.Id)
                        .then(()=>{
                            this.heroes=this.heroes.filter(h=>h!==hero);                            
                        })
    }

    initHeros(heros):void{
        this.heroes=heros;
    }

}



