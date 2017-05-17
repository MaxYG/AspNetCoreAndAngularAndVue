/**
 * Created by shinetech-yg on 5/15/2017.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'hero-birthday',
  templateUrl:"hero-birthday.component.html"
})
export class HeroBirthdayComponent {
  birthday = new Date(1988, 3, 15); // April 15, 1988

  toggle=true;
  get format111(){
    return this.toggle?"shortDate":"fullDate";
  }
  toggleFormat(){
    this.toggle=!this.toggle;
  }
}
