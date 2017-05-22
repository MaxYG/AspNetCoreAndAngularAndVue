


/**
 * Created by shinetech-yg on 5/15/2017.
 */
import { Component } from '@angular/core';
export class Study{
    Id:number;
    Name:string;
    Email:string;
    state:string;
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

  

  studies: any[] = [];
  canFly = true;
  constructor() { this.reset(); }

  addstudy(name: string) {
    name = name.trim();
    if (!name) { return; }
    let study = {name, canFly: this.canFly};
    this.studies.push(study);
  }

  reset() { this.studies = []; }
  
}
