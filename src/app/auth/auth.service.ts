import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class AuthService {
 user = {};
 isLoggedIn: boolean;
  constructor(private af: AngularFire) {
  	this.af.auth.subscribe(user => {
      if(user) {
        // user logged in
        this.user = user;
        this.isLoggedIn = true;
        console.log(this.user);
    
      }
      else {
        // user not logged in
        this.user = {};
        this.isLoggedIn = false;
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

loggedIn(){ return this.isLoggedIn}
   // Logout user
 logout() {
  this.af.auth.logout();
 }

}
