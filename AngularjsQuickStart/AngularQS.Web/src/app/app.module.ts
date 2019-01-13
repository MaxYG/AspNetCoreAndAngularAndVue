import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http'

import{AppMaterialModule} from './app-material'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatDialogModule} from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routing }        from './app.routing';
import { AuthGuard } from './guards';

import {  UserService,AuthService,AlertService,WebConstantService,BaseHttpServoce } from './services';
import { HomeComponent } from './home';
import {LoginComponent} from './login'
import { LoginLayoutComponent } from './layouts/login-layout.component';
import {HeaderComponent} from './header'
import {AlertComponent} from './commonComponent/alert.component'
import {UserComponent} from './user/user.component'
import { FooterComponent } from './footer/footer.component';
import {UserAddModalComponent} from './user/user-add.component'


@NgModule({
  declarations: [
    AppComponent,HomeComponent,LoginComponent,LoginLayoutComponent,HeaderComponent,AlertComponent,
    UserComponent,FooterComponent,UserAddModalComponent
  ],
  imports: [
    NgbModule,    BrowserModule,    routing,        ReactiveFormsModule,    BrowserAnimationsModule,    MatButtonModule, MatCheckboxModule,
    AppMaterialModule,    HttpClientModule  ,    FormsModule ,    MatDialogModule
  ],
  entryComponents: [
    UserAddModalComponent
  ],
  providers: [
    AuthGuard,
    AuthService,
    AlertService,
    WebConstantService,
    UserService,
    BaseHttpServoce
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
