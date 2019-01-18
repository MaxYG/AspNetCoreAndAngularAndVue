import { Component, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router'
import {WebConstantService} from '../services/web.constant.service'
import { UserService } from '../services';
import { Observable } from 'rxjs';
import {MatSelectModule} from '@angular/material/select';
import {Language} from '../models/languages'
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  
  currentLanguage:string;
  languages:Language[]=[{value:"en",displayName:"English",allValue:"en-US"},
  {value:"zh",displayName:"中文",allValue:"zh-CN"}];
  constructor(private router:Router,
    private userServcie:UserService,
    public translate: TranslateService,
    private webConstantService:WebConstantService) { 
     
      let localStorageLanguage=localStorage.getItem("AngularQSLanguage");
      if(localStorageLanguage){

        this.currentLanguage=this.languages.find(function(lan){
          return lan.value==JSON.parse(localStorageLanguage).value;
        }).displayName;
      }else{
        this.currentLanguage=this.languages[0].displayName;
      }
  }
  
  setLanguage(language:Language){
    this.currentLanguage=language.displayName;
    this.translate.use(language.value);
    this.translate.setDefaultLang(language.value);
    localStorage.setItem("AngularQSLanguage",JSON.stringify(language));
  }
  onLogout() {
    localStorage.removeItem(this.webConstantService.localStoreKey);
    this.router.navigate(['/login']);
  }

  getUsers(){
    this.router.navigate(['/user']);
  }
}
