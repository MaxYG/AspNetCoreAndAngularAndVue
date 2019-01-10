import { Component } from '@angular/core';
import {Router} from '@angular/router'
import {WebConstantService} from '../services/web.constant.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    `.angular-logo {
        margin: 0 4px 3px 0;
        height: 35px;
        vertical-align: middle;
    }
    .fill-remaining-space {
      flex: 1 1 auto;
    }
    `
  ]
})
export class HeaderComponent {

  constructor(private router:Router,
    private webConstantService:WebConstantService) { }

  onLogout() {
    localStorage.removeItem(this.webConstantService.localStoreKey);
    this.router.navigate(['/login']);
  }

  getUsers(){
    
  }
}
