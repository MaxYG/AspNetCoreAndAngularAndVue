import {Component} from '@angular/core';


@Component({
    moduleId:module.id,
    selector:'user-input',
    templateUrl:'user-input.component.html',
    styleUrls:['user-input.component.css']

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

    isShowClass=true;
}