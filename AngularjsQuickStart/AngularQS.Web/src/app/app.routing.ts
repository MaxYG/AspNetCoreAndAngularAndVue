import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import{LoginComponent} from './login'
import { AuthGuard } from './guards';
import { LoginLayoutComponent } from './layouts/login-layout.component';
import { UserComponent } from './user/user.component';

const appRoutes: Routes = [   
    { 
        path: '',
        component: HomeComponent, 
        canActivate: [AuthGuard],
        children: [
          { path: '', component: UserComponent },
        ]
    },   
    { path: 'login',component: LoginComponent},    
    { path: '**', redirectTo: '' }
];


export const routing = RouterModule.forRoot(appRoutes);