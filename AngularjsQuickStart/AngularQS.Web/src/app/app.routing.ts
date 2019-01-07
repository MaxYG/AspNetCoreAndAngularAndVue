import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import{LoginComponent} from './login'
import { AuthGuard } from './guards';
import { LoginLayoutComponent } from './layouts/login-layout.component';

const appRoutes: Routes = [   
    { path: '',component: HomeComponent},
    { path: 'login',component: LoginComponent},
    { path: '**', redirectTo: '' }
];


export const routing = RouterModule.forRoot(appRoutes);