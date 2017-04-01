/**
 * Created by shinetech-yg on 3/31/2017.
 */


import {Component, Injectable, Input, Output} from "@angular/core";

@Injectable()
@Component({
  selector:'my-ngmodule',
  templateUrl: 'my.ngmodule.component.html',
})

export class MyNgmoduleComponent{
  @Output() subtitle="";
  title="angular modules";
}
