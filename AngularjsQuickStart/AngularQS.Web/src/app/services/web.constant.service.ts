import { Injectable } from "@angular/core";


@Injectable()
export class WebConstantService{
   readonly rootUrl = "http://localhost:53856/";
   readonly localStoreKey="AngularQS";
   readonly userUrl="api/user/all";
   readonly userAddUrl="api/user/add"
}
