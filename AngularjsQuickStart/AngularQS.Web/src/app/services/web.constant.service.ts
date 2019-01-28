import { Injectable } from "@angular/core";
import { environment } from '../../environments/environment';

@Injectable()
export class WebConstantService{
  
   readonly rootUrl = environment.apiUrl;  
   readonly localStoreKey="AngularQS";
   readonly userAllUrl="api/user/all";
   readonly userAddUrl="api/user/add";
   readonly userUpdateUrl="api/user/update";
   readonly userUrl="api/user"
}
