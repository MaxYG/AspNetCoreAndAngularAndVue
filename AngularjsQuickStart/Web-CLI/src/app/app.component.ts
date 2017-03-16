import {Component,OnInit,Injectable} from '@angular/core';
import {LoginUser} from "./appglobal/loginUser";
import {LocalStorageService} from "angular-2-local-storage";

@Injectable()
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
    private localStorageService:LocalStorageService,

  ){}

  ngOnInit(): void {
    this.initLoginUser()
  }

  initLoginUser():void{
      let userCookie=this.localStorageService.get("loginUser");
      if(userCookie){

      }
  }

}
