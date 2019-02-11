import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule, HttpClient} from '@angular/common/http'
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import{AppMaterialModule} from './app-common-part'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppAllModule} from './app-material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';

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
// import { CustomTranslateLoader } from './commonComponent/custom-translate-loader';
import {CustomElementComponent} from './main/customElement/custom-element.component'
import { DynamicPopupComponent } from './main/customElement/dynamic-popup.component';
import { DynamicPopupService } from './main/customElement/dynamic-popop.service'
import { CanvasComponent } from './main/canvasComponent/canvas.component'
import { AdService, HeroJobAdComponent, AdBannerComponent, 
  HeroProfileComponent, AdDirective, DynamicComponent } from './main/dynamicComponent';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { UnlessDirective } from './directive/unless.directive';
import { DirectiveComponent } from './main/directiveComponent/directive.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient,"./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,HomeComponent,LoginComponent,LoginLayoutComponent,
    HeaderComponent,AlertComponent, UserComponent,FooterComponent,
    UserAddModalComponent,UserDeleteComponent, NotFoundComponent,
    UserUpdateModalComponent,DynamicPopupComponent,CustomElementComponent,
    AdBannerComponent,HeroJobAdComponent,HeroProfileComponent,AdDirective,
    DynamicComponent,CanvasComponent,UnlessDirective,DirectiveComponent
  ],
  imports: [
    NgbModule, BrowserModule, routing,  ReactiveFormsModule, BrowserAnimationsModule,  
    AppMaterialModule, HttpClientModule, FormsModule,        
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AppAllModule,FileUploadModule, 
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  entryComponents: [
    UserAddModalComponent,UserDeleteComponent,UserUpdateModalComponent,
    DynamicPopupComponent,HeroJobAdComponent,HeroProfileComponent
  ],
  providers: [
    AuthGuard, AuthService, AlertService, WebConstantService, UserService,
    BaseHttpServoce, DynamicPopupService, AdService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
