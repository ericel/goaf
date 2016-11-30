import { Component, ViewContainerRef } from '@angular/core';
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

  isHeader: boolean;

  title = 'app works!';

  
  progress: number = 0;
  items: FirebaseListObservable<any[]>;
  isLoggedIn: boolean;
  user = {};

 
  constructor(public toastr: ToastsManager, vRef: ViewContainerRef,  private af: AngularFire, private titleService: Title, private AuthService : AuthService, private _r: Router) {
   this.toastr.setRootViewContainerRef(vRef);
    console.log(AuthService.canActivate);
      this.af.auth.subscribe(user => {
      if(user) {
        // user logged in
        this.user = user;
        this.isLoggedIn = true;
        this.toastr.custom('<div class="toast-show-o alert alert-success alert-dismissible fade in" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Success!</strong> You Successfully Logged in!</div>', null, {enableHTML: true});
    
      }
      else {
        // user not logged in
        this.user = {};
        this.isLoggedIn = false;
      }
    });


     this._r.events.subscribe(event => {
      if (event instanceof RoutesRecognized) {
        console.log('navigated to:', event.url);
        console.log('route state', event.state);
        console.log('');
      
      }
      else if (event instanceof NavigationEnd) {
        // if u dont need the state, you could even use this event-type..
        console.log('navigated to:', event.urlAfterRedirects);
        if(event.urlAfterRedirects === '/home'){
          console.log("this is home");
          this.isHeader = true;
        }
      }
    });
   // this.items = af.database.list('items');
    // Update the value for the progress-bar on an interval.
    setInterval(() => {
      this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
    }, 200);

    
  }


  public setTitle( newTitle: string) {
    this.titleService.setTitle( "newTitle");
  }
   
 logout() {
      this.AuthService.logout();
  }
  /* constructor(private router: RouterModule){}

  routeIsActive(routePath: string) {
     let currentRoute = this.router.currentInstruction.component.routeName; 
     console.log(currentRoute);
     // e.g. 'Login' or null if route is '/'
     let segment = currentRoute == null ? '/' : currentRoute.segment;
     return  segment == routePath;
  }*/

}
