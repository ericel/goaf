import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;

  starsCount: number;
  starsCounts: number[] = [];
  myLabel = 'Select Place Category';
  myValue = '4';
  myItems = ['Hotel', 'Restaurant', 'Office', 'Embassy', 'Education', 'School', 'Hospital', 'Coffee', 'Park', 'Bus Station','Train Station', 'Government', 'Local', 'Airport'];
  constructor() { }

  ngOnInit() {
  	this.starsCount = 2.5;
  }
}
