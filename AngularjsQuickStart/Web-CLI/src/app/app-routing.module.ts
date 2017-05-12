import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import {HeroesComponent} from './hero/heroes.component';
import {HeroDetailComponent} from './hero/hero-detail.component';
import {DashboardComponent} from './hero/dashboard.component';
import {UserInputComponent} from './hero/user-input.component';
import {InternationalizationComponent} from './hero/internationalization.component';
import {DeleteModalComponent} from './commonComponent/delete.modal.component';
import {LoginComponent} from './login/login.component';
import {CanActivateTeam} from "./appCanActivate/appCanActivateTeam";
import {LoginUser} from "./appglobal/loginUser";
import {Permissions} from "./appCanActivate/appPermissions";
import {MyAnimationComponent} from "./animationComponent/my.animation.component";
import {MyNgmoduleComponent} from "./ngmoduleComponent/my.ngmodule.component";
import {MyAttributeDirectiveComponent} from "./attributeDirectiveComponent/my-attribute-directive.componet";
import {MyComponentStyleComponent} from "./componentStyleComponent/my-component-style.component";
import {MyDeployComponent} from "./deploy/deploy.component";
import {MyHierarchicalDependencyInjectionComponent} from "./hierarchicalDependencyInjection/my-herarchical-dependency-injection.component";
import {HeroTaxReturnComponnent} from "./hierarchicalDependencyInjection/hero-tax-return.component";


const routes:Routes=[
   { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:Id', component: HeroDetailComponent },
  { path: 'user-input', component: UserInputComponent },
  { path: 'internationalization', component: InternationalizationComponent },
  { path: 'my-animations', component: MyAnimationComponent },
  { path: 'my-ngmodule', component: MyNgmoduleComponent },
  { path: 'my-attribute-directive', component: MyAttributeDirectiveComponent },
  { path: 'my-component-style', component: MyComponentStyleComponent },
  { path: 'my-deploy', component: MyDeployComponent },
  { path: 'my-hierarchical-dependency-injection', component: MyHierarchicalDependencyInjectionComponent },
  // { path: 'my-contact', component: MyContactComponent },
  { path: 'heroes',     component: HeroesComponent,canActivate:[CanActivateTeam] },


  { path: 'my-ngmodule/crisis',loadChildren:"app/ngmoduleComponent/crisis/crisis.module#CrisisModule" },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [CanActivateTeam, LoginUser, Permissions]
})
export class AppRoutingModule {}
