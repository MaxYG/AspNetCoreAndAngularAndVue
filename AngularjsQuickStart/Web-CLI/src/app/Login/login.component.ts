import {Component,Injectable } from '@angular/core';
import {RouterModule,ActivatedRoute,Router} from '@angular/router';
import {AuthenticateService} from "../appglobal/authenticate.service";
import {LoginUser} from "../appglobal/loginUser";
import {LoginForm} from "./loginForm";
import {LocalStorageService} from "angular-2-local-storage";

@Injectable()
@Component({
    selector:'login',
    templateUrl:'login.component.html',
})

@Injectable()
export class LoginComponent {
  loginUser:LoginUser;
  loginForm:LoginForm={Email:"test@test.com",Password:"Password1"};
  constructor(
    private router:Router,
    private authService:AuthenticateService,
    private localStorageService:LocalStorageService
  ){}


  login():void{
      let command={
        username:this.loginForm.Email,
        password:this.loginForm.Password,
      };
    this.authService.login(command).then(response=>this.loginSuccess(response));
  }

  loginSuccess(response){
    this.localStorageService.set("loginUser", response);
    console.log(this.localStorageService.get("loginUser"));
  }
}



