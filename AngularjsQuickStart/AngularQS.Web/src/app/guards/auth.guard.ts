import {Injectable} from '@angular/core';
import {Router, CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private router:Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        // return false;

        return true;

        // if (localStorage.getItem('currentUser')) {           
        //     return true;
        // }
        // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        // return false;
    }
}