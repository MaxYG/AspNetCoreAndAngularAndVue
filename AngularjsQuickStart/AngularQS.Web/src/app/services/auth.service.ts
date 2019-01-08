import { Injectable } from '@angular/core'
import { User } from '../models';

@Injectable()
export class AuthService{

    login(user: User) :boolean{

        return true;
        //return this.http.post(`${config.apiUrl}/users/register`, user);
    }
}