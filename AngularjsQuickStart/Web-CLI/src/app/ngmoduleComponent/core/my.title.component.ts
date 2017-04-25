/**
 * Created by shinetech-yg on 4/5/2017.
 */


import {Component, Injectable, Input, Output} from "@angular/core";
import {UserService} from "./user.service";

@Injectable()
@Component({
  selector:'my-title',
  templateUrl: 'my.title.component.html',
})

export class MyTitleComponent{
  @Input() subtitleObj = "";
  title = 'Angular Modules';

  user="";
  constructor(userService:UserService){
      this.user=userService._userName;
  };
}
