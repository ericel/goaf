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
  myLabel = 'Select a number';
  myValue = '4';
  myItems = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  constructor() { }

  ngOnInit() {
  	this.starsCount = 2.5;
  }
}
