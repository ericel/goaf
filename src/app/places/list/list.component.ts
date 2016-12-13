import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgModel } from '@angular/forms';
import { PlacesService } from '../services/places.service';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'; 
import { AngularFire, AuthProviders, AuthMethods, FirebaseObjectObservable } from 'angularfire2';
import {Md5} from 'ts-md5/dist/md5';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, AfterViewInit {
 listForm : FormGroup;
 lat: number = 51.678418;
 lng: number = 7.809007;
 submitted = false;
 uid: string;
 username: string;
 useremail: string;
 placeID: any;
 public pAddress : Object;
 pName: string;
 
  starsCount: number;
  starsCounts: number[] = [];
  myLabel = 'Select Place Category';
  pCategory = "Restaurant";
  placeName: string;

 
  myItems = ['Hotel', 'Restaurant', 'Office', 'Embassy', 'Education', 'Hostel', 'School', 'Hospital', 'Coffee', 'Park', 'Bus Station','Train Station', 'Government', 'Local', 'Airport'];
  constructor(
     fb: FormBuilder,
     private _placesService: PlacesService,
     private router: Router,
     private af: AngularFire
    ) {
   this.listForm = fb.group({
      'pCategory' : [null, Validators.required],
      'pAddress': [null,  Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(100)])],
      'pName' : [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])]
    })
    //console.log(this.listForm);
    this.listForm.valueChanges.subscribe( (form: any) => {
      //console.log('form changed to:', form);
    }
    );
    this.af.auth.subscribe((user) => { 
    if (user) {
      this.uid = user.uid;
      this.username = user.auth.displayName;
      this.useremail = user.auth.email;
    }
   });
    this.placeID = Md5.hashStr(new Date() + this.uid + this.username + this.useremail);
  }
  
  ngOnInit() {
  	this.starsCount = 2.5;
     
  }

  ngAfterViewInit() {
    
  }
  getAddress(place:Object) {       
        this.pAddress = place['formatted_address'];
         var location = place['geometry']['location'];
         this.lat =  location.lat();
         this.lng = location.lng();
   }
  submitForm(value: any){
    this.placeName = pName.value;
    this._placesService.listPlaces(pName.value, pCategory.value, pAddress.value, this.lat, this.lng, this.placeID, this.uid, this.username)
    .then((success) => {
      this.submitted = true;
      console.log('success');
      this.countDown();
    })
    .catch(err => console.log(err, 'You dont have access!'));
  }

  countDown() {
    var i = 5;
     var myinterval = setInterval(() => {
        document.getElementById("countdown").innerHTML = "redirecting in: " + i;
        if (i === 0) {
            clearInterval(myinterval );
             this.router.navigate([`/place/${this.placeID}/${this.convertToSlug(this.placeName)}`]);
        }
        else {
            i--;
        }
    }, 1000);
 }
 convertToSlug(Text)
  {
      return Text
          .toLowerCase()
          .replace(/[^\w ]+/g,'')
          .replace(/ +/g,'-')
          ;
  }
    
}
