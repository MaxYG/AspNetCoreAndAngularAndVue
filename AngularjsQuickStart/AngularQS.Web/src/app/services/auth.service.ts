import { Injectable } from '@angular/core'
import { User } from '../models';
import {Router} from '@angular/router'
import {AlertService} from '../services/alert.service'
import {HttpClient} from '@angular/common/http'
import {catchError} from 'rxjs/operators'
import {WebConstantService} from './web.constant.service'

@Injectable()
export class AuthService{

    constructor(private router :Router,
        private httpClient: HttpClient,
        private webConstantService: WebConstantService,
        private alertService :AlertService){

    }
    login(user: User){
        var loginOperate=this.httpClient.post(this.webConstantService.rootUrl+"api/user/authenticate/",user).pipe(
            catchError(error=>this.handleError(error))            
        );
        loginOperate.subscribe(x=>this.handleLoginSuccess(x));
    }
    handleLoginSuccess(x: {} | Object): void {
        this.alertService.success("login success");
        localStorage.setItem(this.webConstantService.localStoreKey,JSON.stringify(x));              
        this.router.navigate(['/home']);
    }
    handleError(error: any): any {
        this.alertService.error("login failed");
    }
   
    
}