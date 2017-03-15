import {Component } from '@angular/core';
import {RouterModule,ActivatedRoute,Router} from '@angular/router';

@Component({
    selector:'login',
    templateUrl:'login.component.html',
})

export class LoginComponent {

  constructor(
    private router:Router,
  ){}
  login():void{
    this.router.navigate(['/heroes']);
  }
}



