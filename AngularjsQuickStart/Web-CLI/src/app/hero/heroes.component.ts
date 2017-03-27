import {Component,ViewChild } from '@angular/core';
import {OnInit} from '@angular/core';
import {RouterModule,ActivatedRoute,Router} from '@angular/router';
import { ModalDirective } from 'ng2-bootstrap';

import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

import {Hero} from './hero';
import {HeroService} from './hero.service';
import {AlertService} from "../appglobal/alert.service";
import {AlertMessage} from "../appglobal/AlertMessage";

@Component({
    selector:'my-heroes',
    templateUrl:'heroes.component.html',
    styleUrls: ['heroes.component.css']
})

export class HeroesComponent implements OnInit{
    @ViewChild('lgModal') public addOrEditHeroModal:ModalDirective;
    @ViewChild('deleteModal') public commonDeleteModal:ModalDirective;
    heroes = [];

    hero : Hero={Id:0,Name:"",Email:""};
    heroDelete:Hero={Id:0,Name:"",Email:""}
  alertMessage:AlertMessage;

  constructor(
    private heroService:HeroService,
    private route: ActivatedRoute,
    private router:Router,
    private alertService:AlertService
  ){}

  ngOnInit():void{
    this.getHeroes();
  }

  showSuccessMessage():void{
    let message=this.alertService.successMessage()
    // this.alertMessage={
    //   isShow:message.isShow,
    //   msg:message.msg,
    //   type:message.type,
    //   timeout:message.timeout
    // };
    console.log(this.alertMessage)
  }

    onSelect(hero:Hero):void{
        this.hero=Object.assign({},hero);
        this.addOrEditHeroModal.show();
    }

    cleanHeroValue(){
        this.hero={Id:0,Name:"",Email:""};
    }

    getHeroes():void{
        this.heroService.getHeroesByHttp().then(h=>this.initHeros(h));
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

    search(term: string): void {
        if(term===""){
            this.getHeroes();
        }else{
            this.heroService.searchHero(term)
                .then(h=>this.initHeros(h));
        }
    }
}



