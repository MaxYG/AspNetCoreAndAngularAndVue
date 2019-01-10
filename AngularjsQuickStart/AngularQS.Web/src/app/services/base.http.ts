import {HttpClient} from '@angular/common/http'
import { inject, Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {

    headers: new HttpHeaders({      
      'Authorization': 'my-auth-token'
    })
  };

@Injectable()
export class BaseHttp{

    

    constructor(private httpClient: HttpClient){
    }

    // Post (url:string, data?:Object,):  Observable<Object> {
    //     return this.httpClient.post(webApiUrl+url, data, httpOptions);
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