/**
 * Created by shinetech-yg on 3/17/2017.
 */
import {Injectable} from "@angular/core";

import {LoginUser} from "../appglobal/loginUser";
import {LocalStorageService} from "angular-2-local-storage";

@Injectable()
export class Permissions {
  constructor(
    private localStorageService:LocalStorageService,
  ){}

  //loginUser: LoginUser
  canActivate(loginUser: LoginUser): boolean {
    let currentLoginUser=this.localStorageService.get("loginUser");
    if(currentLoginUser==null){
      return false;
    }else{
      return true;
    }
  }
}
