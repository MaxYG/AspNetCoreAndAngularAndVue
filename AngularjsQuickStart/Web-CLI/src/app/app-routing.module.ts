import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import {HeroesComponent} from './hero/heroes.component';
import {HeroDetailComponent} from './hero/hero-detail.component';
import {DashboardComponent} from './hero/dashboard.component';
import {UserInputComponent} from './hero/user-input.component';
import {InternationalizationComponent} from './hero/internationalization.component';
import {DeleteModalComponent} from './commonComponent/delete.modal.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';

const routes:Routes=[
   { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:Id', component: HeroDetailComponent },
  { path: 'user-input', component: UserInputComponent },
  { path: 'internationalization', component: InternationalizationComponent },
  { path: 'heroes',     component: HeroesComponent },
  { path: 'home',     component: HomeComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
