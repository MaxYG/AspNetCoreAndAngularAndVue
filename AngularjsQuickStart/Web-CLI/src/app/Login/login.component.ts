import {Component,Injectable } from '@angular/core';
import {RouterModule,ActivatedRoute,Router} from '@angular/router';
import {AuthenticateService} from "../appglobal/authenticate.service";
import {LoginUser} from "../appglobal/loginUser";
import {LoginForm} from "./loginForm";

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

  ){}


  login(loginCommand):void{
      let command={
        username:loginCommand.Email,
        password:loginCommand.Password,
      };
    this.authService.login(command).then(response=>this.loginSuccess(response));
  }

  loginSuccess(response){
    console.log(response.json());
  }
}



