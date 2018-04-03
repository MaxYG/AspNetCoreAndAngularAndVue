/**
 * Created by shinetech-yg on 3/27/2017.
 */
import {Injectable} from "@angular/core";
import {promise} from "selenium-webdriver";
import {AlertMessage} from "./AlertMessage";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AlertService {
  messageInfo:AlertMessage;

  // getHeroesByHttp(): Promise<Hero[]> {
  //   const getApi=this.webApiUrl+"/api/heros";
  //   return this.http.get(getApi)
  //     .toPromise()
  //     .then(response=>this.returnHeros(response))
  //     .catch(this.handleError);
  // }
  //
  // returnHeros(response):Promise<Hero[]>{
  //   return response.json();
  //
  // }
  showAlertMessage()
  {
    return this.successMessage();
  }

  successMessage(){
      return this.messageInfo={
          type: 'success',
          msg: `Success!`,
          timeout: 3000,
          isShow:true
      };
  }
}









//
// import { Injectable } from '@angular/core';
// import { Router, NavigationStart } from '@angular/router';
// import { Observable } from 'rxjs';
// import { Subject } from 'rxjs/Subject';
//
// @Injectable()
// export class AlertService {
//   private subject = new Subject<any>();
//   // private keepAfterNavigationChange = false;
//
// //     constructor(private router: Router) {
// //        router.events.subscribe(event => {
// //        if (event instanceof NavigationStart) {
// //           if (this.keepAfterNavigationChange) {
// //               this.keepAfterNavigationChange = false;
// //           } else {
// //               this.subject.next();
// //           }
// //        }
// //    });
// //    }
//
//   success(message: string) {
//     //    this.keepAfterNavigationChange = keepAfterNavigationChange;
//     this.subject.next({ type: 'success', msg: message});
//   }
//
//   error(message: string) {
//     // this.keepAfterNavigationChange = keepAfterNavigationChange;
//     this.subject.next({ type: 'error', texmsgt: message });
//   }
//
//   getMessage(): Observable<any> {
//     return this.subject.asObservable();
//   }
// }


// export class AlertMessage{
//   type:string;
//   msg:string;
//   timeout:number;
//
// }

// <div *ngFor="let alert of alerts">
// <alert [type]="alert.type" [dismissOnTimeout]="alert.timeout" >
//   {{alert.msg}}
// </alert>
// </div>
