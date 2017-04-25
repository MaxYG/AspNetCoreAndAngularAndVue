/**
 * Created by shinetech-yg on 4/19/2017.
 */

import {Component, Injectable, Input} from "@angular/core";

@Injectable()
@Component({
  selector:'my-attribute-directive',
  templateUrl:'my-attribute-directive.component.html',
})

export class MyAttributeDirectiveComponent{
  textColor:string = 'blue';
  color:string = 'blue';

}
