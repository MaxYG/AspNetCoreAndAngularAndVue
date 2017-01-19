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
    @ViewChild('lgModal') public addOrEditHeroModal:ModalDirective;
    @ViewChild('deleteModal') public commonDeleteModal:ModalDirective;
    heroes = [];   
    
    hero : Hero={Id:0,Name:""};
    heroDelete:Hero={Id:0,Name:""}
   
    onSelect(hero:Hero):void{
        this.hero=Object.assign({},hero);
        this.addOrEditHeroModal.show();
    }

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
        if(this.hero.Id===0){
            this.heroService.create(this.hero)
                            .then(hero=>{                           
                                this.getHeroes();
                                this.cleanHeroValue();
                                this.addOrEditHeroModal.hide();
                            });   
        }else{
            
            this.heroService.update(this.hero)
                        .then(hero=>{                           
                            this.getHeroes();
                            this.cleanHeroValue();
                            this.addOrEditHeroModal.hide();
                        });   
        }    
                           
    }

    // delete(hero:Hero):void{
    //     this.deleteModal.show();        
    //     this.heroService.delete(hero.Id)
    //                     .then(()=>{
    //                         this.heroes=this.heroes.filter(h=>h!==hero);                            
    //                     })
    // }

    delete(hero:Hero):void{
        this.heroDelete=hero;

        this.commonDeleteModal.show();        
        // this.heroService.delete(hero.Id)
        //                 .then(()=>{
        //                     this.heroes=this.heroes.filter(h=>h!==hero);                            
        //                 })
    }

    deleteHero(){
        this.heroService.delete(this.heroDelete.Id)
                        .then(()=>{
                            this.getHeroes();
                            this.commonDeleteModal.hide();
                        });
    }

    initHeros(heros):void{
        this.heroes=heros;
    }

}



