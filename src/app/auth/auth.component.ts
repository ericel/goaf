import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { AngularFire, AuthProviders, AuthMethods , FirebaseAuthState} from 'angularfire2';
import { AuthService } from './auth.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
   
   constructor(private titleService: Title, private AuthService : AuthService, public toastr: ToastsManager, private af: AngularFire) {
      
   }

 ngOnInit() {
  	 this.titleService.setTitle("Register for a free Goaf Account");
        console.log("ngOnInit called");
  }

 public setTitle( newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
showSuccess() {
        this.toastr.error('You are awesome!', 'Success!');
 }
login(){
  this.AuthService.login()
  .then((auth: FirebaseAuthState) => {
      console.log('authenticated');
    });
}
overrideLogin(){
  this.AuthService.overrideLogin();
}

}