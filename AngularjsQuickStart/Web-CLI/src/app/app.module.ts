import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

import './rxjs-extensions';

import {AppRoutingModule} from './app-routing.module';
import { ModalModule,DropdownModule  } from 'ng2-bootstrap';
//import { DropdownModule } from 'ng2-bootstrap/dropdown';
import * as spinner from 'ng2-spin-kit/app/spinners';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'


//imports for loading & configuring the in memory web api
//import {InMemoryDataService} from './in-memory-data.service';

import {AppComponent} from './app.component';
import {HeroesComponent} from './hero/heroes.component';
import {HeroDetailComponent} from './hero/hero-detail.component';
import {HeroService} from './hero/hero.service';
import {DashboardComponent} from './hero/dashboard.component';
import {HeroSearchComponent} from './hero/hero-search.component';
import {UserInputComponent} from './hero/user-input.component';
import {InternationalizationComponent} from './hero/internationalization.component';
import {DeleteModalComponent} from './commonComponent/delete.modal.component';
import {LoginComponent} from './login/login.component';
import {AuthenticateService} from "./appglobal/authenticate.service";
import {LocalStorageModule} from "angular-2-local-storage";
import { AlertModule } from 'ng2-bootstrap';
import {AlertComponent} from "./appglobal/alert.component";
import {AlertService} from "./appglobal/alert.service";
import {MyAnimationComponent} from "./animationComponent/my.animation.component";
import {MyNgmoduleComponent} from "./ngmoduleComponent/my.ngmodule.component";
import {MyHighlightDirective} from "./ngmoduleComponent/highlight.directive";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        ModalModule.forRoot(),
        DropdownModule.forRoot(),
        AlertModule.forRoot(),
      Angular2FontawesomeModule,

      LocalStorageModule.withConfig({
        prefix:"my-app",
        storageType:"localStorage"
      })
    ],
    declarations: [
        AppComponent , HeroesComponent, HeroDetailComponent, DashboardComponent, HeroSearchComponent,
        UserInputComponent, InternationalizationComponent, DeleteModalComponent, LoginComponent,AlertComponent,
      MyAnimationComponent,MyNgmoduleComponent,MyHighlightDirective,
      spinner.RotatingPlaneComponent,      spinner.DoubleBounceComponent,      spinner.WaveComponent,
      spinner.WanderingCubesComponent,      spinner.PulseComponent,      spinner.ChasingDotsComponent,
      spinner.CircleComponent,      spinner.ThreeBounceComponent,      spinner.CubeGridComponent,
      spinner.WordPressComponent,      spinner.FadingCircleComponent,      spinner.FoldingCubeComponent
    ],
    providers:[
        HeroService,
        AuthenticateService,
      AlertService
    ],
    bootstrap:    [ AppComponent ],

})

export class AppModule{}
