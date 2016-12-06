import { Component, ViewContainerRef, ViewChild } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Title }     from '@angular/platform-browser';
import {ActivatedRoute, Router, Routes, RouterModule, RoutesRecognized, NavigationEnd} from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'app works!';
  
  constructor() {
   
    setInterval(() => {
      this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
    }, 200);

    
  }


}
