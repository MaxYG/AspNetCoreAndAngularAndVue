import { Injectable } from '@angular/core'
import { User } from '../models';
import {Router} from '@angular/router'
import{AlertService} from '../services/alert.service'


@Injectable()
export class AuthService{

    constructor(private router :Router,
        private alertService :AlertService){

    }
    login(user: User){
        if(user.username==="test" && user.password==="test"){
            this.router.navigate(['/home']);
        }else{
            this.alertService.error("login failed");
        }
        
        //return this.http.post(`${config.apiUrl}/users/register`, user);
    }
}