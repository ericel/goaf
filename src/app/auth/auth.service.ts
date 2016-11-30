import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthService implements CanActivate{
  public allowed: boolean;
  user: {};
  private isloggedIn;
  constructor(private af: AngularFire, private router: Router) { 
    // this.af.auth.subscribe((auth) => console.log(auth));
    this.af.auth.subscribe(user => {
    if (user) {
      this.isloggedIn = 'true';
    } else {
      this.isloggedIn = 'false';
    }
   });


  }

 
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.af.auth.map((auth) =>  {
      if(auth == null) {  
        this.router.navigate(['/auth']);
        return false;
      } else {
        return true;
      }
    }).first()
  }

isLoggedIn () {
 return this.isloggedIn;

}

redirectAuth() {
  this.af.auth.subscribe(user => {
    if (user) {
      console.log(user);
      this.allowed = true;
    } else {
      this.allowed = false;
    }
     return this.allowed;
  });
}

login() {
  return this.af.auth.login({
    provider: AuthProviders.Facebook,
    method: AuthMethods.Redirect
  });
}

overrideLogin() {
    return this.af.auth.login({
      provider: AuthProviders.Google
    });    
  }

   // Logout user
 logout() {
  this.af.auth.logout();
 }

}
