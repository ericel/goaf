import { Component, OnInit, ViewContainerRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgModel } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PlacesService } from '../services/places.service';
import { AuthService } from '../../auth/auth.service';
@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit, AfterViewInit {
  listForm : FormGroup;
  lat: number;
  lng: number;
  private sub:any;
  public place: any;
  uid: any;
  isGoafUser: boolean;
  authID: string;
  website: string,
  phone;
  phone_number;
  websiteLink;
  hrs: any;
  starsCount: number;
  canEdit: boolean = false;
  images:any;
  monday: boolean = false;
   
  myItems = ['Hotel', 'Restaurant', 'Office', 'Embassy', 'Education', 'Hostel', 'School', 'Hospital', 'Coffee', 'Park', 'Bus Station','Train Station', 'Government', 'Local', 'Airport'];
  constructor(private route: ActivatedRoute,
    vRef: ViewContainerRef,  
    fb: FormBuilder,
    private _placesService: PlacesService, 
    private AuthService : AuthService) { 
     this.openForm = fb.group({
      
    });

  }

  ngOnInit() {
  	this.starsCount = 2.5;
    this.sub = this.route.params.subscribe(params => {
        let id = params['id'];
        let str = params['string'];
       // Retrieve Pet with Id route param
       this._placesService.findPetById(id).subscribe(place => {
         this.place = place;
         this.lat = this.place.geometry.latitude;
         this.lng = this.place.geometry.longitude;
         this.starsCount = this.place.rating;
         this.authID = this.place.authorID;
         this.website = this.place.website;
         if(this.website === "no_website"){
           this.website = "No website added";
           this.websiteLink = "#";
         } else {
           this.websiteLink = this.website;
           this.website = "Website";
         }
         this.phone = this.place.pPhone;
         if(this.phone === "no_phone"){
           this.phone_number = "Phone Number not added!";
         } else {
           this.phone_number = this.phone;
         }
         this.hrs = this.place.openHours;
         this.AuthService.loggedInID().subscribe(value => {
          this.uid = value;
          if(this.authID === this.uid){
            this.canEdit = true;
          }
          });
       });

    });

    this.images = [
      {"url":"./assets/images/design/list.jpg",
       "title":"Aliquam erat volutpat",
       "caption":"imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit."
      },
      {"url":"./assets/images/design/room.jpeg",
       "title":"Aliquam erat volutpat",
       "caption":"imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit."
      },
      {"url":"./assets/images/design/list.jpg",
       "title":"Aliquam erat volutpat",
       "caption":"imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit."
      },
      {"url":"./assets/images/design/room.jpeg",
       "title":"Aliquam erat volutpat",
       "caption":"imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit."
      },
      {"url":"./assets/images/design/list.jpg",
        "title":"Aliquam erat volutpat",
       "caption":"imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit."
      },
      {"url":"./assets/images/design/room.jpeg",
        "title":"Aliquam erat volutpat",
       "caption":"imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit."
      },
      {"url":"./assets/images/design/list.jpg",
        "title":"Aliquam erat volutpat",
       "caption":"imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit."
      }
      ]; 
   
     
  }
  ngAfterViewInit() {
    

  }

  mon(e){
    if(e.checked){
      console.log("This is checked")
    } else {
      console.log("unchecked");
    }
  }
   ngOnDestroy() {
      // Clean sub to avoid memory leak
    this.sub.unsubscribe();
  }
}
