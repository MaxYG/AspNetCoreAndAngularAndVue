import { Injectable } from '@angular/core'
import { User } from '../models';
import {Router} from '@angular/router'


@Injectable()
export class AuthService{

    constructor(private router :Router){

    }
    login(user: User){
        if(user.username==="test" && user.password==="test"){
            this.router.navigate(['/home']);
        }else{
            
        }
        
        //return this.http.post(`${config.apiUrl}/users/register`, user);
    }
}