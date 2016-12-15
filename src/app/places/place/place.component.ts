import { Component, OnInit, ViewContainerRef } from '@angular/core';
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
export class PlaceComponent implements OnInit {
  listForm : FormGroup;
  lat: number;
  lng: number;
  private sub:any;
  public place: any;
  uid: string;
  isGoafUser: boolean;
  authID: string;
  starsCount: number;
  canEdit: boolean = false;
   images:any;
   
  myItems = ['Hotel', 'Restaurant', 'Office', 'Embassy', 'Education', 'Hostel', 'School', 'Hospital', 'Coffee', 'Park', 'Bus Station','Train Station', 'Government', 'Local', 'Airport'];
  constructor(private route: ActivatedRoute,
    vRef: ViewContainerRef,  
    fb: FormBuilder,
    private _placesService: PlacesService, 
    private AuthService : AuthService) { 
     this.listForm = fb.group({
      'pCategory' : [null, Validators.required],
      'pAddress': [null,  Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(100)])],
      'pName' : [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])]
    })
  }

  ngOnInit() {
  	this.starsCount = 2.5;
    this.sub = this.route.params.subscribe(params => {
        let id = params['id'];
        let str = params['string'];
       // Retrieve Pet with Id route param
       this._placesService.findPetById(id).subscribe(place => {
         this.place = place;
         this.lat = this.place.lat;
         this.lng = this.place.lng;
         this.starsCount = this.place.rating;
         this.authID = this.place.authorID;
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

   ngOnDestroy() {
      // Clean sub to avoid memory leak
    this.sub.unsubscribe();
  }
}
