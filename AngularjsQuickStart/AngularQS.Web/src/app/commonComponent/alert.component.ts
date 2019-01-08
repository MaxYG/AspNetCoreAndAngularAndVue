import {Component,OnInit } from '@angular/core';
import {AlertMessage} from '../models';
import{AlertService} from '../services/alert.service';

@Component({
    selector:'app-alert',
    templateUrl:'alert.component.html'
})

export class AlertComponent implements OnInit{

    constructor(private alertService:AlertService){

    };
    message: AlertMessage;
    alerts: AlertMessage[]=[];
    isHideAlertMessage:boolean;
    ngOnInit() {
        this.isHideAlertMessage=false;
        var alertSubscribe=this.alertService.getMessage().subscribe(message => { 
            this.message = message as AlertMessage;             
            this.alerts.push(this.message);
        });

        setTimeout(() => {  
            var xxx=this.alerts;          
            this.isHideAlertMessage=true;
          }, 3000);
     }

     

     close(alert: AlertMessage) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
      }
}