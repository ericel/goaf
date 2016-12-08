import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;

  starsCount: number;
  starsCounts: number[] = [];
  constructor() { }

  ngOnInit() {
  	this.starsCount = 2.5;
  }

}
