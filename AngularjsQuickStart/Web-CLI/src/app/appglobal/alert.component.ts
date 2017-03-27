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
