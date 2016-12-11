import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgModel } from '@angular/forms';
import { PlacesService } from '../services/places.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 listForm : FormGroup;
 lat: number = 51.678418;
 lng: number = 7.809007;
   public pAddress : Object;

  starsCount: number;
  starsCounts: number[] = [];
  myLabel = 'Select Place Category';
  pCategory = "Restaurant";
  //pAddress = "3rd Floor, Roshamaer Place, P.O. Box 42441, Nairobi, Kenya";
  pName = "South Africa High Commission";
  myItems = ['Hotel', 'Restaurant', 'Office', 'Embassy', 'Education', 'Hostel', 'School', 'Hospital', 'Coffee', 'Park', 'Bus Station','Train Station', 'Government', 'Local', 'Airport'];
  constructor(fb: FormBuilder, _placesService: PlacesService) {
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
  }

  submitForm(value: any){
    console.log(pAddress.value);
  }
   getAddress(place:Object) {       
        this.pAddress = place['formatted_address'];
         var location = place['geometry']['location'];
         this.lat =  location.lat();
         this.lng = location.lng();
         console.log("Address Object", place);
   }
}
