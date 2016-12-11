import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgModel } from '@angular/forms';
import { PlacesService } from '../services/places.service';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 listForm : FormGroup;
 lat: number;
 lng: number;
 public pAddress : Object;


  starsCount: number;
  starsCounts: number[] = [];
  myLabel = 'Select Place Category';
  pCategory = "Restaurant";
  //pAddress = "3rd Floor, Roshamaer Place, P.O. Box 42441, Nairobi, Kenya";
  pName = "South Africa High Commission";
  myItems = ['Hotel', 'Restaurant', 'Office', 'Embassy', 'Education', 'Hostel', 'School', 'Hospital', 'Coffee', 'Park', 'Bus Station','Train Station', 'Government', 'Local', 'Airport'];
  constructor(fb: FormBuilder, private _placesService: PlacesService) {
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
  getAddress(place:Object) {       
        this.pAddress = place['formatted_address'];
         var location = place['geometry']['location'];
         this.lat =  location.lat();
         this.lng = location.lng();
         console.log("Address Object", place);
   }
  submitForm(value: any){
    this._placesService.listPlaces(pName.value, pCategory.value, pAddress.value, this.lat, this.lng);
  }
  
  
}
