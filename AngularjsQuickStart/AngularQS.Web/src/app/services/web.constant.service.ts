import { Injectable } from "@angular/core";


@Injectable()
export class WebConstantService{
   readonly rootUrl = "http://localhost:53856/";
   readonly localStoreKey="AngularQS";
   readonly userAllUrl="api/user/all";
   readonly userAddUrl="api/user/add";
   readonly userUpdateUrl="api/user/update";
   readonly userUrl="api/user"
}
