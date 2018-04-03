/**
 * Created by shinetech-yg on 3/24/2017.
 */
import { Component,Injectable ,OnInit} from '@angular/core';

import {AlertModule } from "ng2-bootstrap/alert";
import {AlertService} from "./alert.service";

@Injectable()
@Component({
  selector: 'my-alert',
  templateUrl: 'alert.component.html'
})

export class AlertComponent implements OnInit{
  alertMessage:any;
  constructor(
    private alertService:AlertService
  ){};

  ngOnInit(): void {
    //this.alertMessage=this.alertService.successMessage();
  }
}

//
//
// import {Component,OnInit } from '@angular/core';
// import {AlertComponent} from 'ngx-bootstrap';
// import {AlertMessage} from './alert-message';
// import{AlertService} from './alert.service';
//
// @Component({
//   selector:'app-alert',
//   templateUrl:'alert.component.html'
// })
//
// export class CommonAlertComponent implements OnInit{
//
//   constructor(private alertService:AlertService){};
//   message: AlertMessage;
//   alerts: AlertMessage[]=[];
//   ngOnInit() {
//     this.alertService.getMessage().subscribe(message => {
//       this.message = message as AlertMessage;
//       this.message.timeout=3000;
//       this.alerts.push(this.message);
//     });
//   }
//
//   // alerts: any[] = [{
//   //     type: 'success',
//   //     msg: `success`,
//   //     timeout: 3000
//   //   }];
// }
