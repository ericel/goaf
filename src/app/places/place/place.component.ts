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
  id;
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
  mOpen;
  mClose;
  monCheck;
  mon_label; tues_label; wed_label; thu_label; fri_label; sat_label; sun_label;
  tOpen; tClose; tuesCheck; wOpen; wClose; wedCheck; thuOpen; thuClose; thuCheck; friOpen; friClose; friCheck; 
  satOpen; satClose; satCheck; sunOpen; sunClose; sunCheck;
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
        this.id = params['id'];
        let str = params['string'];
       // Retrieve Pet with Id route param
       this._placesService.findPetById(this.id).subscribe(place => {
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
         
         this.AuthService.loggedInID().subscribe(value => {
          this.uid = value;
          if(this.authID === this.uid){
            this.canEdit = true;
          }
          });

         this.mOpen = this.place.openHours.Monday.openTime;
         this.mClose = this.place.openHours.Monday.closeTime;
         this.monCheck = this.place.openHours.Monday.status;
         if(this.monCheck){
           this.mon_label = "Open";
         } else {
           this.mon_label = "Close";
         }

         this.tOpen = this.place.openHours.Tuesday.openTime;
         this.tClose = this.place.openHours.Tuesday.closeTime;
         this.tuesCheck = this.place.openHours.Tuesday.status;
         if(this.tuesCheck){
           this.tues_label = "Open";
         } else {
           this.tues_label = "Close";
         }
         this.wOpen = this.place.openHours.Wednesday.openTime;
         this.wClose = this.place.openHours.Wednesday.closeTime;
         this.wedCheck = this.place.openHours.Wednesday.status;
         if(this.wedCheck){
           this.wed_label = "Open";
         } else {
           this.wed_label = "Close";
         }
         this.thuOpen = this.place.openHours.Thursday.openTime;
         this.thuClose = this.place.openHours.Thursday.closeTime;
         this.thuCheck = this.place.openHours.Thursday.status;
         if(this.thuCheck){
           this.thu_label = "Open";
         } else {
           this.thu_label = "Close";
         }
         this.friOpen = this.place.openHours.Friday.openTime;
         this.friClose = this.place.openHours.Friday.closeTime;
         this.friCheck = this.place.openHours.Friday.status;
         if(this.friCheck){
           this.fri_label = "Open";
         } else {
           this.fri_label = "Close";
         }
         this.satOpen = this.place.openHours.Saturday.openTime;
         this.satClose = this.place.openHours.Saturday.closeTime;
         this.satCheck = this.place.openHours.Saturday.status;
         if(this.satCheck){
           this.sat_label = "Open";
         } else {
           this.sat_label = "Close";
         }
         this.sunOpen = this.place.openHours.Sunday.openTime;
         this.sunClose = this.place.openHours.Sunday.closeTime;
         this.sunCheck = this.place.openHours.Sunday.status;
         if(this.sunCheck){
           this.sun_label = "Open";
         } else {
           this.sun_label = "Close";
         }
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
  detect(e){
    this._placesService.updatePlaceHours(this.id, this.monCheck, this.mOpen, this.mClose,
     this.tuesCheck, this.tOpen, this.tClose, this.wedCheck, this.wOpen, this.wClose, this.thuCheck, this.thuOpen, this.thuClose, this.friCheck, this.friOpen, this.friClose, this.satCheck, this.satOpen, this.satClose, this.sunCheck, this.sunOpen, this.sunClose);
  }

   ngOnDestroy() {
      // Clean sub to avoid memory leak
    this.sub.unsubscribe();
  }
}
