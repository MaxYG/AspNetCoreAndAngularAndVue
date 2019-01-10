import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models';
import { WebConstantService } from './web.constant.service';
import { BaseHttpServoce } from './base.http.service';
import { Observable, of } from 'rxjs';


@Injectable()
export class UserService {
    
    constructor(private http: BaseHttpServoce,private webConstantService:WebConstantService) { }

    getAll() :Observable<User[]>{
       return this.http.getAll(this.webConstantService.rootUrl+this.webConstantService.userUrl) as Observable<User[]>;
    }

    getById(id: number) {
        //return this.http.get(`${config.apiUrl}/users/` + id);
    }

    register(user: User) {
        //return this.http.post(`${config.apiUrl}/users/register`, user);
    }

    update(user: User) {
        //return this.http.put(`${config.apiUrl}/users/` + user.id, user);
    }

    delete(id: number) {
        //return this.http.delete(`${config.apiUrl}/users/` + id);
    }
}