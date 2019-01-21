import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule, HttpClient} from '@angular/common/http'
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import{AppMaterialModule} from './app-common-part'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppAllModule} from './app-material-module';
// import {AppAllComponentModule} from './app-common-part/app-component-module'
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
import {UserDeleteComponent} from './user/user-delete.component'
import {UserUpdateModalComponent} from './user/user-update.component'
import {NotFoundComponent} from './commonComponent/not-found.component'

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient,"./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,HomeComponent,LoginComponent,LoginLayoutComponent,HeaderComponent,AlertComponent,
    UserComponent,FooterComponent,UserAddModalComponent,UserDeleteComponent,
    NotFoundComponent,UserUpdateModalComponent
  ],
  imports: [
    NgbModule,    
    BrowserModule,    
    routing,        
    ReactiveFormsModule,    
    BrowserAnimationsModule,   
    AppMaterialModule,    
    HttpClientModule  ,    
    FormsModule ,        
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AppAllModule
  ],
  entryComponents: [
    UserAddModalComponent,UserDeleteComponent,UserUpdateModalComponent
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
