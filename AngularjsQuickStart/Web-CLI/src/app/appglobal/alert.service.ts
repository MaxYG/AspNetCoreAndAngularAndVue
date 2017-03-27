/**
 * Created by shinetech-yg on 3/27/2017.
 */
import {Injectable} from "@angular/core";
import {promise} from "selenium-webdriver";
import {AlertMessage} from "./AlertMessage";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AlertService {
  messageInfo:AlertMessage;

  // getHeroesByHttp(): Promise<Hero[]> {
  //   const getApi=this.webApiUrl+"/api/heros";
  //   return this.http.get(getApi)
  //     .toPromise()
  //     .then(response=>this.returnHeros(response))
  //     .catch(this.handleError);
  // }
  //
  // returnHeros(response):Promise<Hero[]>{
  //   return response.json();
  //
  // }
  showAlertMessage()
  {
    return this.successMessage();
  }

  successMessage(){
      return this.messageInfo={
          type: 'success',
          msg: `Success!`,
          timeout: 3000,
          isShow:true
      };
  }
}
