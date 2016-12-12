import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-placetemplate',
  templateUrl: './placetemplate.component.html',
  styleUrls: ['./placetemplate.component.css']
})
export class PlacetemplateComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor() { }

  ngOnInit() {
  }

}
