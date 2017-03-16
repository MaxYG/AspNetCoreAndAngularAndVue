/**
 * Created by shinetech-yg on 3/15/2017.
 */

import {Http,Headers} from "@angular/http";
import {Injectable} from "@angular/core";
import {ApiBaseUrl} from "../appglobal/apiBaseUrl";
import {LoginUser} from "../appglobal/loginUser";
import {LocalStorageService} from "angular-2-local-storage";

@Injectable()
export class AuthenticateService{

  loginUser:LoginUser;
  private webApiUrl=ApiBaseUrl.apiUrl;
  private loginWebApiUrl=this.webApiUrl+"/api/auth/login";
  private headers = new Headers({'Content-Type':'application/json'});
  constructor(
    private http:Http,
    private localStorageService:LocalStorageService,
  ){

  }

  login(command):Promise<LoginUser>{
    return this.http.post(this.loginWebApiUrl,JSON.stringify(command),{headers:this.headers})
      .toPromise()
      .then(response=>this.returnLoginUser(response))
      .catch(ex=>this.handleExcetption(ex))
  }

  handleExcetption(ex):void{
      console.log("exception:"+ex);
  }

  returnLoginUser(response):Promise<LoginUser>{
      this.localStorageService.set("currentLoginUser",response)
      return this.loginUser=response.json();
  }
}
