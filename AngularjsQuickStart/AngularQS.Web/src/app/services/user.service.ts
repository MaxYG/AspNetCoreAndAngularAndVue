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
       return this.http.getAll(this.webConstantService.userAllUrl) as Observable<User[]>;
    }

    getById(id: number) {
        //return this.http.get(`${config.apiUrl}/users/` + id);
    }

    add(user: User) :Observable<any>{
        return this.http.post(this.webConstantService.userAddUrl, user) as Observable<any>;
    }

    update(user: User) :Observable<any>{
        return this.http.put(this.webConstantService.userUpdateUrl,user);
    }

    delete(id: number) {
        return this.http.deleteById(this.webConstantService.userUrl, id);
    }
}