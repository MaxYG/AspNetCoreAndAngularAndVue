import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { WebConstantService } from './web.constant.service';
import { AlertService } from './alert.service';
import {catchError} from 'rxjs/operators'
import { Observable } from 'rxjs';


@Injectable()
export class BaseHttpServoce{
    constructor(private httpClient: HttpClient,
        private alertService:AlertService,
        private webConstantService:WebConstantService){       
    }

    private headerOptions = new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+localStorage.getItem(this.webConstantService.localStoreKey)
    });

    getAll (url:string, data?:Object,):Observable<Object> {
        return this.httpClient.get(this.webConstantService.rootUrl+url,{headers:this.headerOptions}).pipe(
            catchError(error=>this.handleError(error))  
        );
    }

    handleError(error: any): any {
        this.alertService.error(error);
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