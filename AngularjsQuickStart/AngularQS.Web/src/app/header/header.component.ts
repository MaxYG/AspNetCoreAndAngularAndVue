import { Component } from '@angular/core';
// import { AuthService } from './../auth/auth.service';
import {Router} from '@angular/router'

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

  constructor(private router:Router) { }

  onLogout() {
    this.router.navigate(['/login']);
    // this.authService.logout();
  }
}
