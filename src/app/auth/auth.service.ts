import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import { Observable } from 'rxjs/Observable';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthService implements CanActivate{
  public allowed: boolean;

  constructor(private af: AngularFire, private router: Router) { 
    // this.af.auth.subscribe((auth) => console.log(auth));
  }



 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.af.auth.subscribe((auth) =>  {
      if(auth == null) {
        this.router.navigate(['/auth']);
        this.allowed = false;
      } else {
        this.allowed = true;
      }
    })
    return this.allowed;
  }


login() {
  this.af.auth.login({
    provider: AuthProviders.Facebook,
    method: AuthMethods.Redirect
  });
}

overrideLogin() {
    this.af.auth.login({
      provider: AuthProviders.Google
    });    
  }

   // Logout user
 logout() {
  this.af.auth.logout();
 }

}
