import { Component, ElementRef, OnInit, ViewContainerRef, ViewChild, AfterViewInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Title }     from '@angular/platform-browser';
import {ActivatedRoute, Router, Routes, RouterModule, RoutesRecognized, NavigationEnd} from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  host: {
        '(window:scroll)': 'updateHeader($event)'
    }
})
export class HeaderComponent implements OnInit, AfterViewInit {
  isScrolled = false;
  currPos: Number = 0;
  startPos: Number = 0;
  changePos: Number = 100;
  delta: Number = 5;
  navbarHeight: Number = 40;
  element: any;
  username: string;
  photoUrl: string;
  
  progress: number = 0;
  items: FirebaseListObservable<any[]>;
  user = {};
  
  isGoafUser: boolean;
  constructor(public toastr: ToastsManager,
   vRef: ViewContainerRef,  
   private af: AngularFire, 
   private titleService: Title, 
   private AuthService : AuthService, 
   private _r: Router,
   private _element: ElementRef
   ) {
    
  	this.toastr.setRootViewContainerRef(vRef);
   //Check logged in user
    this.AuthService.isLoggedIn.subscribe(value => { 
      
        this.isGoafUser = value;
     
    });
    this.AuthService.getUserData().subscribe(userData => {
      this.username = userData.username;
      this.photoUrl = userData.photoUrl;
    });
    //routes manipulation
     this._r.events.subscribe(event => {
      if (event instanceof RoutesRecognized) {
       //console.log('navigated to:', event.url);
        //console.log('route state', event.state);
       // console.log('');
      
      }
      else if (event instanceof NavigationEnd) {
        // if u dont need the state, you could even use this event-type..
        //console.log('navigated to:', event.urlAfterRedirects);
        if(event.urlAfterRedirects === '/home'){
          //console.log("this is home");
          //this.isHeader = true;
        }
      }
    });

   }

  ngOnInit() {
  }
 
  ngAfterViewInit() {
   /* this._animator
      .setType('bounce')
      .setDelay(150)
      .setDuration(700)
      .show(this._elementRef.nativeElement);*/
 
  }
 


   updateHeader(evt) {
        
        this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
        let st = this.currPos;
        
        if(this.currPos <= this.changePos ) {
            this.isScrolled = true;
          
        } else {
            this.isScrolled = false;
        }
    }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( "newTitle");
  }
   
 logout() {
      this.AuthService.logout();
  }

}
