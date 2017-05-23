/**
 * Created by shinetech-yg on 5/15/2017.
 */
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

export class Study{
    Id:number;
    Name:string;
    Email:string;
    state:string;
  IsLogin:boolean
}

@Component({
  selector: 'hero-birthday',
  templateUrl:"hero-birthday.component.html"
})
export class HeroBirthdayComponent {
  birthday = new Date(1988, 3, 15); // April 15, 1988
  power=5;
  factor=1;
  toggle=true;
  get format111(){
    return this.toggle?"shortDate":"fullDate";
  }
  toggleFormat(){
    this.toggle=!this.toggle;
  }

  studies: any[] = [
    {name: 'Windstorm', IsLogin: true},
    {name: 'Bombasto', IsLogin: false},
    ];
  IsLogin = true;
  constructor() { this.resend(); }

  addstudy(name: string) {
    name = name.trim();
    if (!name) { return; }
    let study = {name, IsLogin: this.IsLogin};

    this.studies.push(study);
  }

  reset() { this.studies = []; }


  message$: Observable<string>;

  private messages = [
    'You are my hero!',
    'You are the best hero!',
    'Will you be my hero?'
  ];
  resend() {
    this.message$ = Observable.interval(2000)
      .map(i => this.messages[i])
      .take(this.messages.length);
  }




}
