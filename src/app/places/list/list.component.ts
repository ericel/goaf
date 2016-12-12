import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgModel } from '@angular/forms';
import { PlacesService } from '../services/places.service';
import {Md5} from 'ts-md5/dist/md5';
import { MapsAPILoader } from 'angular2-google-maps/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 listForm : FormGroup;
 lat: number;
 lng: number;
 submitted = false;
 public pAddress : Object;


  starsCount: number;
  starsCounts: number[] = [];
  myLabel = 'Select Place Category';
  pCategory = "Restaurant";
  //pAddress = "3rd Floor, Roshamaer Place, P.O. Box 42441, Nairobi, Kenya";
  pName = "South Africa High Commission";
  myItems = ['Hotel', 'Restaurant', 'Office', 'Embassy', 'Education', 'Hostel', 'School', 'Hospital', 'Coffee', 'Park', 'Bus Station','Train Station', 'Government', 'Local', 'Airport'];
  constructor(fb: FormBuilder, private _placesService: PlacesService, private _mapsAPILoader: MapsAPILoader) {
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
  }
  
  ngOnInit() {
  	this.starsCount = 2.5;
    //console.log(this.myValue);
    //console.log(google);
    //this.lat = 51.678418;
    //this.lng = 7.809007;
  }

  ngAfterViewInit() {
    this._mapsAPILoader.load().then(() => {
    // Place your code in here...
    console.log(google);
    });
  }
  getAddress(place:Object) {       
        this.pAddress = place['formatted_address'];
         var location = place['geometry']['location'];
         this.lat =  location.lat();
         this.lng = location.lng();
         console.log("Address Object", this.pAddress);
   }
  submitForm(value: any){
    console.log(this.pName);
    this._placesService.listPlaces(pName.value, pCategory.value, pAddress.value, this.lat, this.lng)
    .then((success) => {
      this.submitted = true;
      console.log('success');
    })
    .catch(err => console.log(err, 'You dont have access!'));
  }
  
  
}
