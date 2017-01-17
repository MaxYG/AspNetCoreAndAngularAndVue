import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';


import {HeroesComponent} from './hero/heroes.component';
import {HeroDetailComponent} from './hero/hero-detail.component';
import {DashboardComponent} from './hero/dashboard.component';
import {UserInputComponent} from './hero/user-input.component';
import {InternationalizationComponent} from './hero/internationalization.component';

const routes:Routes=[
   { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:Id', component: HeroDetailComponent },
  { path: 'user-input', component: UserInputComponent },
  { path: 'internationalization', component: InternationalizationComponent },  
  { path: 'heroes',     component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}