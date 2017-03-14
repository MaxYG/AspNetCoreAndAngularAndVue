import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

import './rxjs-extensions';



import {AppRoutingModule} from './app-routing.module';

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
import {HomeComponent} from './home/home.component';

import { ModalModule } from 'ng2-bootstrap';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        ModalModule.forRoot()
    ],
    declarations: [
        AppComponent ,
        HeroesComponent,
        HeroDetailComponent,
        DashboardComponent,
        HeroSearchComponent,
        UserInputComponent,
        InternationalizationComponent,
        DeleteModalComponent,
        LoginComponent,
      HomeComponent
    ],
    providers:[
        HeroService
    ],
    bootstrap:    [ AppComponent ],

})

export class AppModule{}
