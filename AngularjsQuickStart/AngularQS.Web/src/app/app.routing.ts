import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import{LoginComponent} from './login'
import { AuthGuard } from './guards';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    // { path: 'login', component: LoginComponent },
    // { path: 'register', component: RegisterComponent },
   
    // { path: '**', redirectTo: '' }
];


export const routing = RouterModule.forRoot(appRoutes);