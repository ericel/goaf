import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

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
  constructor() { }

  ngOnInit() {
  	this.starsCount = 2.5;
    //console.log(this.myValue);
  }

  
   getAddress(place:Object) {       
        this.pAddress = place['formatted_address'];
         var location = place['geometry']['location'];
         this.lat =  location.lat();
         this.lng = location.lng();
         console.log("Address Object", place);
   }
}
