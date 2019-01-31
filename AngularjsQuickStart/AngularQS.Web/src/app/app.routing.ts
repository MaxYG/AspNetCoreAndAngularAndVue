import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import{LoginComponent} from './login'
import { AuthGuard } from './guards';
import { LoginLayoutComponent } from './layouts/login-layout.component';
import { UserComponent } from './user/user.component';
import {CustomElementComponent} from './main/customElement/custom-element.component'

const appRoutes: Routes = [   
    { 
        path: '',
        component: HomeComponent, 
        canActivate: [AuthGuard],
        children: [
          { path: '', component: UserComponent },
          { path: 'customerElement', component: CustomElementComponent },
        ]
    },   
    { path: 'login',component: LoginComponent},    
    { path: '**', redirectTo: '' }
];


export const routing = RouterModule.forRoot(appRoutes);