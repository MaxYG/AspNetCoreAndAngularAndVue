import {Component,Injectable,OnInit } from '@angular/core';
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
export class LoginComponent implements OnInit{
  loginUser:LoginUser={Id:0} as LoginUser;
  loginForm:LoginForm={Email:"test@test.com",Password:"Password1"};
  constructor(
    private router:Router,
    private authService:AuthenticateService,
    private localStorageService:LocalStorageService
  ){}

  ngOnInit(): void {
    this.isSholwLoginPage();
  }

  login():void{
    this.authService.login(this.loginForm).then(response=>this.loginSuccess(response));
  }

  loginSuccess(response){
    this.localStorageService.set("loginUser", response);
    this.loginUser=response as LoginUser;
    this.loginUser.IsLogin=true;
    this.router.navigateByUrl("/heroes");
  }

  isSholwLoginPage():void{
    let currentLoginUser=this.localStorageService.get("loginUser");
    if(currentLoginUser==null){
        this.loginUser.IsLogin=false;
    }else{
      this.loginUser=currentLoginUser as LoginUser;
      this.loginUser.IsLogin=true;
      this.router.navigateByUrl("/heroes");
    }
  }
}



