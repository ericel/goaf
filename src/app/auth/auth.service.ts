import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
//import {Subject} from '@reactivex/rxjs/dist/cjs/Subject';
import * as firebase from 'firebase';

import { AngularFire, AuthProviders, AuthMethods, FirebaseObjectObservable } from 'angularfire2';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthService implements CanActivate{
  userRows: FirebaseObjectObservable<any>;
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
  usersArray: any; 
  usersArrayVal: {};
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
      //this.router.navigate(['/home']);
      return true;
    } else {
      return false;
    }
   });
  
   this.users = af.database.object('/goaf-users', { preserveSnapshot: true });

   this.usersArray = this.users.map((snapshot) => {
      this.usersArrayVal = snapshot.val();
      return true;
      
    });

  }

 
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.af.auth.map((auth) =>  {
      if(auth == null) {  
        this.router.navigate(['/register']);
        return false;
      } else {
        return true;
      }
    }).first()
  }

createUserRow() {
  this.usersArray.subscribe(value => { 
    //this.usersArrayVal = value;
  });
  //console.log(this.usersArrayVal);
         this.userRows.set({
            username: this.username,
            useremail: this.useremail,
            provider: this.provider,
            signup  : firebase.database.ServerValue.TIMESTAMP,
            photoUrl: this.photoUrl
        });
  
}

updateUserInfo() {
   this.users.subscribe(snapshot => {
      let usersVal = snapshot.val();
      console.log(usersVal[this.uid].photoUrl);
      if (usersVal[this.uid]) {
         if(usersVal[this.uid].photoUrl !== this.photoUrl){
           console.log('different');
           /*this.userRows.set({
              username: this.username,
              useremail: this.useremail,
              provider: this.provider,
              photoUrl: this.photoUrl
          });*/
         }
      }
    }); 
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
