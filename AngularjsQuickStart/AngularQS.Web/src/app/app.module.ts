import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routing }        from './app.routing';
import { AuthGuard } from './guards';

import {  UserService } from './services';
import { HomeComponent } from './home';
import {LoginComponent} from './login'

@NgModule({
  declarations: [
    AppComponent,HomeComponent,LoginComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
  ],
  providers: [
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
