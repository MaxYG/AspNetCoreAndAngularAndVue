/**
 * Created by shinetech-yg on 3/15/2017.
 */

import {Http,Headers} from "@angular/http";
import {Injectable} from "@angular/core";
import {ApiBaseUrl} from "../appglobal/apiBaseUrl";
import {LoginUser} from "../appglobal/loginUser";

@Injectable()
export class AuthenticateService{

  loginUser:LoginUser;
  private webApiUrl=ApiBaseUrl.apiUrl;
  private loginWebApiUrl=this.webApiUrl+"/api/auth/login";
  private headers = new Headers({'Content-Type':'application/json'});
  constructor(
    private http:Http
  ){}

  login(command):Promise<LoginUser>{
    return this.http.post(this.loginWebApiUrl,JSON.stringify(command),{headers:this.headers})
      .toPromise()
      .then(response=>this.returnLoginUser(response))
  }

  returnLoginUser(response):Promise<LoginUser>{
      return this.loginUser=response.json();
  }
}
