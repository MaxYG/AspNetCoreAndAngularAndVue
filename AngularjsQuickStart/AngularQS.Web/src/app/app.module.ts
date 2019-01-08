import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{AppMaterialModule} from './app-material'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routing }        from './app.routing';
import { AuthGuard } from './guards';

import {  UserService,AuthService,AlertService } from './services';
import { HomeComponent } from './home';
import {LoginComponent} from './login'
import { LoginLayoutComponent } from './layouts/login-layout.component';
import {HeaderComponent} from './header'
import {AlertComponent} from './commonComponent/alert.component'

@NgModule({
  declarations: [
    AppComponent,HomeComponent,LoginComponent,LoginLayoutComponent,HeaderComponent,AlertComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    AppMaterialModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    AlertService
    //UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
