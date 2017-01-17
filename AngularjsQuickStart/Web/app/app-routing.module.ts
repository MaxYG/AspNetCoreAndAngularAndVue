import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';


import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {DashboardComponent} from './dashboard.component';
import {UserInputComponent} from './user-input.component';
import {InternationalizationComponent} from './internationalization.component';

const routes:Routes=[
   { path: '', redirectTo: '/internationalization', pathMatch: 'full' },
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