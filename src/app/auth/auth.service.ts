import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Subject} from '@reactivex/rxjs/dist/cjs/Subject';

import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthService implements CanActivate{
   userRows: FirebaseListObservable<any>
  user: {};
  isLoggedIn: any;
  private isloggedIn:Subject = new BehaviorSubject(false);
  constructor(private af: AngularFire, private router: Router) { 
    
    this.isLoggedIn = this.af.auth.map((user) => { // map instead of subscribe
    if (user) {
      return true;
    } else {
      return false;
    }
   });

    this.userRows = af.database.list('/goaf-users/3ss');

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

createUserRow(userID, username) {
  username = 'Eric Ojong';
  this.userRows.child('11111').set({
    lastname: "Lee",
    firstname: "Kang"
  });
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
