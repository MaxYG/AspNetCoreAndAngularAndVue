import {Injectable} from '@angular/core';
import {Router, CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import {WebConstantService} from '../services/web.constant.service'

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private router:Router,
        private webConstantService:WebConstantService){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        
        if(localStorage.getItem(this.webConstantService.localStoreKey)){
            return true;
        }
        localStorage.removeItem(this.webConstantService.localStoreKey);
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}