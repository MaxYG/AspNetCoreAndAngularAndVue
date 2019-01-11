import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { WebConstantService } from './web.constant.service';
import { AlertService } from './alert.service';
import {catchError} from 'rxjs/operators'
import { Observable } from 'rxjs';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
import { Router } from '@angular/router';


@Injectable()
export class BaseHttpServoce{
    constructor(private httpClient: HttpClient,
        private alertService:AlertService,
        private router:Router,
        private webConstantService:WebConstantService){       
    }

    private headerOptions = new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+  JSON.parse(localStorage.getItem(this.webConstantService.localStoreKey)).token
    });

    getAll (url:string, data?:Object,):Observable<Object> {
        return this.httpClient.get(this.webConstantService.rootUrl+url,{headers:this.headerOptions}).pipe(
            catchError(error=>this.handleError(error))  
        );
    }

    handleError(error: any): any {   
        localStorage.removeItem(this.webConstantService.localStoreKey);
        if(error.status===401){            
            this.router.navigate(["/login"]);
        }else if(error.status===404){
            this.alertService.error("404");
            //this.router.navigate(["/not-found"]);
        }else{
            this.alertService.error(error.message);
        }

    }

    // Post (url:string, data?:Object,):  Observable<Object> {
    //     return this.httpClient.post(this.webConstantService.rootUrl+url, data, httpOptions);
    // }

    // post(url: string, body: any | null, options?: {
    //     headers?: HttpHeaders | {
    //         [header: string]: string | string[];
    //     };
    //     observe?: 'body';
    //     params?: HttpParams | {
    //         [param: string]: string | string[];
    //     };
    //     reportProgress?: boolean;
    //     responseType?: 'json';
    //     withCredentials?: boolean;
    // }): Observable<Object>;

}