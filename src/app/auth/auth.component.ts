import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
   
   constructor(private titleService: Title, private AuthService : AuthService) {
   
   }

  ngOnInit() {
  	 this.titleService.setTitle("Register for a free Goaf Account");
        console.log("ngOnInit called");
  }

 public setTitle( newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
login(){
  this.AuthService.login();
}
overrideLogin(){
  this.AuthService.overrideLogin();
}

}