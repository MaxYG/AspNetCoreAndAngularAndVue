import { Component, Input, Output, EventEmitter } from "@angular/core";
import { state, style, trigger, animate, transition } from '@angular/animations';

@Component({
    selector:"dynamic-my-popup",
    templateUrl:"./dynamic-popop.component.html",
    host:{
        '[@state]': 'state',
    },
    animations:[
        trigger('state', [
            state('opened', style({transform: 'translateY(0%)'})),
            state('void, closed', style({transform: 'translateY(100%)', opacity: 0})),
            transition('* => *', animate('100ms ease-in')),
          ])    
    ],
    styles: [`
    :host {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: #009cff;
      height: 48px;
      padding: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid black;
      font-size: 24px;
    }
 
    button {
      border-radius: 50%;
    }
  `]
})

export class DynamicPopupComponent{
    private state:"opened"|"closed"="closed";
    
    @Input()
    set message(message:string){
        this._message=message;
        this.state="opened";
    }

    get message():string{
        return this._message;
    }
    _message:string;
    @Output()
    closed=new EventEmitter();
}