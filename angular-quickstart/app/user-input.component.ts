import {Component,EventEmitter,Input,Output} from '@angular/core';
import {Hero} from './Hero';
import {HEROES} from './mock-heroes';

@Component({
    moduleId:module.id,
    selector:'user-input',
    styleUrls:['user-input.component.css'],
    templateUrl:'user-input.component.html'  
})

export class UserInputComponent{
    
    values='';
    onkey(event:any){
        //this.values+=event.target.value+'  |  ';
        this.values+=event.key+'  |  ';
    }

    // onkey(event:KeyboardEvent){
    //     this.values+=(<HTMLInputElement>event.target).value+"   |   ";
    // }

     valuesxx='';
    onkeyxx(value:string){
        //this.values+=event.target.value+'  |  ';
        this.valuesxx+=value+'  |  ';
    }

    Entervalue='';
    onEnter(value:string){
        //this.values+=event.target.value+'  |  ';
        this.Entervalue+=value+'  |  ';
    }

    blurvalue='';
    update(value:string){
        //this.values+=event.target.value+'  |  ';
        this.blurvalue+=value+'  |  ';
    }

    isShowClass=false;
    colorSet='color-green';
    isSpecial=true;
    canSave=false;

    onClickTest(){
        alert("click event");
    }

    hero:Hero={
        id:2,
        name:""
    }

    heroes:Hero[]=HEROES;

    deleteHeroRequest=new EventEmitter<Hero>();
    deleteHero(hero):void{
         alert(hero.id);
        alert(this.hero.id);
        this.deleteHeroRequest.emit(this.hero);
    }

    @Input() size:number=1;
    @Output() sizeChange=new EventEmitter<number>();
    
    resize(delta:number){
        this.size=Math.min(40,Math.max(8,+this.size+delta));
        this.sizeChange.emit(this.size);
    }

    dec(){
        this.resize(-1);
    }

    inc(){
        this.resize(+1);
    }

      setUpperCaseName(name: string) {          
            this.hero.name = name.toUpperCase();
        }

        isUnchanged=false;
        setClasses() {
            let classes =  {
                saveable: this.canSave,      // true
                colorGreen: !this.isUnchanged, // false
                fontSizeTest: this.isSpecial,     // true
            };
            return classes;
        }

        setStyles() {
            let styles = {            
                'font-style':  this.canSave      ? 'italic' : 'normal',  // italic
                'font-weight': !this.isUnchanged ? 'bold'   : 'normal',  // normal
                'font-size':   this.isSpecial    ? '24px'   : '8px',     // 24px
            };
            return styles;
        }

        toeChoice="Eenie";

        trackByHeroes(index:number,hero:Hero){
            return hero.id
        }

        callPhone(phone:string){
            alert(phone);
        }
        callFax(fax:string){
            alert(fax);
        }
        
}