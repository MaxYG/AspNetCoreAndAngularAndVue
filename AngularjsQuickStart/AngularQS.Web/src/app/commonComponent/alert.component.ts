import {Component,OnInit } from '@angular/core';
import {AlertMessage} from '../models';
import{AlertService} from '../services/alert.service';
import {Subject} from 'rxjs'
import {debounceTime} from 'rxjs/operators';


@Component({
    selector:'app-alert',
    templateUrl:'alert.component.html'    
})

export class AlertComponent implements OnInit{

    constructor(private alertService:AlertService){
           
    };
    private _success = new Subject<string>();
    successMessage: string;
    isShow:boolean=false;

    message: AlertMessage;
    alerts: AlertMessage[]=[];
    
    ngOnInit() {
        var observableMessage = this.alertService.getMessage();
        var alertSubscribe=observableMessage.subscribe(message => { 
            this.alerts=[];
            this.message = message as AlertMessage;             
            this.alerts.push(this.message);
            this.isShow=true;
        });
        let self=this;
        observableMessage.pipe(
            debounceTime(3000)
        ).subscribe(() => {
            self.alerts=[];
            self.isShow=false;           
        });
        
     }

     close(alert: AlertMessage) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    }
}