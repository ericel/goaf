import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { AngularFire, AuthProviders } from 'angularfire2';
import { Auth } from './auth.class';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
   
   constructor(private titleService: Title,public af: AngularFire) {
   
   }

  ngOnInit() {
  	 this.titleService.setTitle("Register for a free Goaf Account");
        console.log("ngOnInit called");
  }

 public setTitle( newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

 login() {
  this.af.auth.login({
    provider: AuthProviders.Google
  });
}

 overrideLogin() {
    this.af.auth.login({
      provider: AuthProviders.Google
    });    
  }


}