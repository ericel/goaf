import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
//import {Subject} from '@reactivex/rxjs/dist/cjs/Subject';

import { AngularFire, AuthProviders, AuthMethods, FirebaseObjectObservable } from 'angularfire2';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthService implements CanActivate{
  userRows: any;
  users: FirebaseObjectObservable<any>;
  uid: string;
  username: string;
  useremail: string;
  photoUrl: string;
  provider: string;
  usersVal: {};
  userThis: FirebaseObjectObservable<any>;
  user: {};
  isLoggedIn: any;

  //private isloggedIn:Subject 
  private isloggedIn = new BehaviorSubject(false);
  constructor(private af: AngularFire, private router: Router) { 
    
    this.isLoggedIn = this.af.auth.map((user) => { // map instead of subscribe
    if (user) {
      this.uid = user.uid;
      this.username = user.auth.displayName;
      this.useremail = user.auth.email;
      this.photoUrl = user.auth.photoURL;
      this.provider = user.auth.providerData[0].providerId;
      this.userRows = this.af.database.object(`/goaf-users/${this.uid}`);
      return true;
    } else {
      return false;
    }
   });
  
   this.users = af.database.object('/goaf-users', { preserveSnapshot: true });

    this.users.subscribe(snapshot => {
      
      let usersVal = snapshot.val();
 
      
      
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

createUserRow() {
 /* this.users.subscribe(snapshot => {
      let usersVal = snapshot.val();
      if (usersVal[this.uid]) {
        console.log('This user already has a row not need to hit the database again!');
      } else {
 */
         this.userRows.set({
            username: this.username,
            useremail: this.useremail,
            provider: this.provider,
            signup  : this.af.database.ServerValue.TIMESTAMP,
            photoUrl: this.photoUrl
        });
 /*     }
    }); */
}

getUserData() {

 //*return this.userThis.map(snapshot => {
   //console.log(this.usersVal[this.uid].username);
   /*let userObject = snapshot.val();
   let thisUid = this.uid;
   console.log(this.uid);
   //letconsole.log(userObject.thisUid.username);
      return snapshot.val();

    });*/


   return this.users.map(snapshot => {
      
      let usersVal = snapshot.val();
      return usersVal[this.uid];
      
      
    });
 

}
redirectAuth() {
  this.af.auth.subscribe(user => {
    if (user) {
      //console.log(user);
      //this.allowed = true;
    } else {
      //this.allowed = false;
    }
     //return this.allowed;
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
