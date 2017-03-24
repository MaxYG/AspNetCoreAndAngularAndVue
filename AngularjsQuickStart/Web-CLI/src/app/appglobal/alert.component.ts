/**
 * Created by shinetech-yg on 3/24/2017.
 */
import { Component,Injectable } from '@angular/core';

import {AlertModule } from "ng2-bootstrap/alert";

@Injectable()
@Component({
  selector: 'my-alert',
  templateUrl: 'alert.component.html'
})

export class AlertComponent {
  alertMessage: any =
  {
    type: 'success',
    msg: `Success!`,
    timeout:3000
  };
}
