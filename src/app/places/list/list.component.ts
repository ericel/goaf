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
  constructor() { }

  ngOnInit() {
  	this.starsCount = 2.5;
  }
}
