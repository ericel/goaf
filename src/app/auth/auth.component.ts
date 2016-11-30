import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { AngularFire, AuthProviders, AuthMethods , FirebaseAuthState} from 'angularfire2';
import { AuthService } from './auth.service';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
   isLogged: boolean;
   constructor(private titleService: Title, private AuthService : AuthService, public toastr: ToastsManager, private af: AngularFire) {
      console.log(this.AuthService.isLoggedIn());
   }

 ngOnInit() {
  	 this.titleService.setTitle("Register for a free Goaf Account");
      console.log(this.AuthService.isLoggedIn());
   
  }

 public setTitle( newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
showSuccess() {
        this.toastr.success('You are awesome!', 'Success!');
 }
showCustom() {
        this.toastr.custom('<span class="success-show">Message in red.</span>', null, {enableHTML: true});
      }
login(){
  this.AuthService.login()
  .then((auth: FirebaseAuthState) => {
      this.toastr.custom('<div class="toast-show-o alert alert-warning alert-dismissible fade in" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Authentication!</strong> Redirecting to authenticate!</div>', null, {enableHTML: true});
    });
}
overrideLogin(){
  this.AuthService.overrideLogin()
  .then((auth: FirebaseAuthState) => {
      this.toastr.custom('<div class="toast-show-o alert alert-warning alert-dismissible fade in" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Authentication!</strong> Redirecting to authenticate!</div>', null, {enableHTML: true});
    });
}

}
