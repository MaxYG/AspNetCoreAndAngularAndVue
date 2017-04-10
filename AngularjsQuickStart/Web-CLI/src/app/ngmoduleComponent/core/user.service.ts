/**
 * Created by shinetech-yg on 4/5/2017.
 */

import {Injectable, Optional} from "@angular/core";

@Injectable()
export class UserService{
  userName="Sherlock Holmes";
  constructor(@Optional() config:UserServiceConfig){
    if(config){
      this._userName=config.userName;
    }
  }
}
