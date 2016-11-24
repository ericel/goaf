import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class AuthService {
 user = {};
  constructor(public af: AngularFire) {
  	this.af.auth.subscribe(user => {
      if(user) {
        // user logged in
        this.user = user;
        console.log(this.user);
      }
      else {
        // user not logged in
        this.user = {};
      }
    });
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
