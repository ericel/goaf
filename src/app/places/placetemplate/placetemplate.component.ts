import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../services/places.service';
@Component({
  selector: 'app-placetemplate',
  templateUrl: './placetemplate.component.html',
  styleUrls: ['./placetemplate.component.css']
})
export class PlacetemplateComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;
  places;
  constructor(private _placesService: PlacesService) { }

  ngOnInit() {
  	this._placesService.getPlacesAll().subscribe(places => {
       this.places = places;
  	});
  }

}
