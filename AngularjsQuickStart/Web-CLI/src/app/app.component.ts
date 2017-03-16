import {Component,OnInit} from '@angular/core';
import {LoginUser} from "./appglobal/loginUser";

@Component({
    selector:'my-app',
    templateUrl:'app.component.html'
})

export class AppComponent implements OnInit{

  loginUser:LoginUser={
    Id:0,
    Name:"",
    Email:"",
    AuthToken:"",
    IsLogin:false
  };
  constructor(

  ){}

  ngOnInit(): void {

  }


}
