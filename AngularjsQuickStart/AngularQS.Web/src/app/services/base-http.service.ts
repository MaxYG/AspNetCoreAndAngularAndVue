import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { WebConstantService } from './web.constant.service';
import { AlertService } from './alert.service';
import {catchError} from 'rxjs/operators'
import { Observable } from 'rxjs';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
import { Router } from '@angular/router';
import { log } from 'util';
import { TranslateService } from '@ngx-translate/core';


@Injectable()
export class BaseHttpServoce{
    
    // private headerOptions = new HttpHeaders({
    //     'Content-Type':  'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    //     'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, Access-Control-Allow-Origin',
    //     'Authorization': 'Bearer '+ localStorage.getItem(this.webConstantService.localStoreKey)!=null?  JSON.parse(localStorage.getItem(this.webConstantService.localStoreKey)).token:"",
    //     'AQSLanguage':JSON.parse(localStorage.getItem("AngularQSLanguage")).value,
    //     "Accept-Language":JSON.parse(localStorage.getItem("AngularQSLanguage")).allValue==undefined?"en-US":JSON.parse(localStorage.getItem("AngularQSLanguage")).allValue
    // });
    
    constructor(private httpClient: HttpClient,
        private alertService:AlertService,
        private router:Router,
        public translate: TranslateService,
        private webConstantService:WebConstantService){      
            
    }    
    getHeaderJson():any{
        //"Accept-Language":JSON.parse(localStorage.getItem("AngularQSLanguage")).allValue==undefined?"en-US":JSON.parse(localStorage.getItem("AngularQSLanguage")).allValue,
        let headerJson={
            'Content-Type':  'application/json', 
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, Access-Control-Allow-Origin',
            'AQSLanguage':'',
            "Authorization":""
        }
        if(localStorage.getItem("AngularQSLanguage")!=null){
            headerJson.AQSLanguage=JSON.parse(localStorage.getItem("AngularQSLanguage")).value;
        }else{
            headerJson.AQSLanguage="en";
        }

        if(localStorage.getItem(this.webConstantService.localStoreKey)!=null){
            headerJson.Authorization='Bearer '+JSON.parse(localStorage.getItem(this.webConstantService.localStoreKey)).token;
        }

        return headerJson;
    }
    getAll (url:string, data?:Object,):Observable<Object> {
        let headerOptions=new HttpHeaders(this.getHeaderJson());
        return this.httpClient.get(this.webConstantService.rootUrl+url,{headers:headerOptions}).pipe(
            catchError(error=>this.handleError(error))  
        );
    }

    post (url:string, data?:any,) :Observable<any>{
        let headerOptions=new HttpHeaders(this.getHeaderJson());
        return this.httpClient.post(this.webConstantService.rootUrl+url,data ,{headers:headerOptions})
        .pipe(
            catchError(error=>this.handleError(error))  
        );
    }

    put (url:string, data?:any,) :Observable<any>{
        let headerOptions=new HttpHeaders(this.getHeaderJson());
        return this.httpClient.put(this.webConstantService.rootUrl+url,data ,{headers:headerOptions})
        .pipe(
            catchError(error=>this.handleError(error))  
        );
    }

    deleteById (url:string, id:number,) :Observable<any>{
        let headerOptions=new HttpHeaders(this.getHeaderJson());
        return this.httpClient.delete(this.webConstantService.rootUrl+url+"/"+id ,{headers:headerOptions})
        .pipe(
            catchError(error=>this.handleError(error))  
        );
    }

    handleError(error: any): any {   
         
        if(error.status===401){            
            localStorage.removeItem(this.webConstantService.localStoreKey);
            this.router.navigate(["/login"]);
        }else if(error.status===404){
            this.alertService.error("404");           
        }else if(error.status===500){            
            this.alertService.error(error.error.error);           
        }else if(error.status===400){   
            let properties=Object.keys(error.error.errors);
            if(properties.length===0){
                this.alertService.error(error.error.error);           
            }else{
                for(var i=0;i<properties.length;i++){
                    let exceptions=error.error.errors[properties[i]];
                    if(exceptions==0){
                        continue;
                    }
                    let exceptionDetail=error.error.errors[properties[i]][0];
                    let errorMessage=this.translate.get("home."+exceptionDetail);
                    errorMessage.subscribe(message=>{                      
                        this.alertService.error(message);
                    })
                    break;
                }
            }         
                    
        }else if(error.status===0){            
            this.alertService.error(error.statusText);           
        }else{
            this.alertService.error(error.message);
        }

    }


}