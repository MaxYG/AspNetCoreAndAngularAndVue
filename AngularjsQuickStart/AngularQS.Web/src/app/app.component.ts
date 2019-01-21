import { Component } from '@angular/core';
import {AlertService} from './services/alert.service'
import {TranslateService} from '@ngx-translate/core';
import { UserService } from './services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayText:string;
  constructor(public translate: TranslateService,
    private userService:UserService
    ) {
    
    translate.addLangs(['en', 'zh']);
    //translate.setDefaultLang('en');
    //const browserLang = translate.getBrowserLang();
    let localStorageLanguage=localStorage.getItem("AngularQSLanguage");
    if(localStorageLanguage){
      translate.use(JSON.parse(localStorageLanguage).value);
      translate.setDefaultLang(JSON.parse(localStorageLanguage).value);
    }else{
      translate.setDefaultLang("en");
      translate.use('en');
    }   
    
    // this.userService.getTest().subscribe(x=>{
    //   this.displayText=JSON.stringify(x);
    // });

  //   translate.get('home.HELLO', {value: '世界'}).subscribe((res: string) => {
  //     this.displayText=res;
  //     // console.log(res);
  //     //=> 'hello world'
  // });
  }
}
