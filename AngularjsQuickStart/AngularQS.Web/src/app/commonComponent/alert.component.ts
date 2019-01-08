import {Component,OnInit } from '@angular/core';
import {AlertMessage} from '../models';
import{AlertService} from '../services/alert.service';

@Component({
    selector:'app-alert',
    templateUrl:'alert.component.html'
})

export class AlertComponent implements OnInit{

    constructor(private alertService:AlertService){};
    message: AlertMessage;
    alerts: AlertMessage[]=[];
    ngOnInit() {
        this.alertService.getMessage().subscribe(message => { 
            this.message = message as AlertMessage; 
            this.message.timeout=3000;
            this.alerts.push(this.message);
        });
     }
}