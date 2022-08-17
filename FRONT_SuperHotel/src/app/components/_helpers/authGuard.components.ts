import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authentificate.service';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, Resolve<any>{
role=""
    constructor(
        private router: Router,
        private authenticateService: AuthenticateService,
    ) { }
       
    resolve() {
    
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this.authenticateService.getUserFromStorage()
        if (user) {
            console.log(user)
            // check if route is restricted by role
            for (let i = 0; i < user.roles.length; i++) {
                if (user.roles[i] === "ROLE_ADMIN") {
                    this.role = "ROLE_ADMIN"
                }
            }
            if (route.data['roles'] && route.data['roles'].indexOf(this.role) === -1) {
                // role not authorised so redirect to home page
                this.router.navigate(['/']);
                return false;
            }

            // authorised so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/home'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}