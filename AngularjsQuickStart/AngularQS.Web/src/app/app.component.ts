import { Component } from '@angular/core';
import {AlertService} from './services/alert.service'
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(public translate: TranslateService) {
    
    translate.addLangs(['en', 'zh']);
    //translate.setDefaultLang('en');
    //const browserLang = translate.getBrowserLang();
    let localStorageLanguage=localStorage.getItem("AngularQSLanguage");
    if(localStorageLanguage){
      translate.use(JSON.parse(localStorageLanguage).value);
      translate.setDefaultLang(localStorageLanguage);
    }else{
      translate.setDefaultLang("en");
      translate.use('en');
    }    
  }
}
