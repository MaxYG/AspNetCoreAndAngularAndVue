/**
 * Created by shinetech-yg on 3/17/2017.
 */
import {Injectable} from "@angular/core";
import {CanActivate} from "@angular/router";
import {ActivatedRouteSnapshot,RouterStateSnapshot} from "@angular/router";
import {Observable} from 'rxjs/Observable';

import {Permissions} from "./appPermissions";
import {LoginUser} from "../appglobal/loginUser";


@Injectable()
export class CanActivateTeam implements CanActivate{
  constructor(private permissions: Permissions, private loginUser: LoginUser) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    return this.permissions.canActivate(this.loginUser);//this.loginUser
  }

}
