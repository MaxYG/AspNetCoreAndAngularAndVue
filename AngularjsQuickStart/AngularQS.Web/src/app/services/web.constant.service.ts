import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment.prod';
// import { environment } from 'src/environments/environment';

@Injectable()
export class WebConstantService{
   //readonly rootUrl = "http://localhost:53856/";
   readonly rootUrl = "";
   constructor(){
      environment.apiUrl;
   }
   
   readonly localStoreKey="AngularQS";
   readonly userAllUrl="api/user/all";
   readonly userAddUrl="api/user/add";
   readonly userUpdateUrl="api/user/update";
   readonly userUrl="api/user"
}
