import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PlacesService } from '../services/places.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
  lat: number;
  lng: number;
  private sub:any;
  public place: any;
  starsCount: number;

   images:any;
  constructor(private route: ActivatedRoute, private _placesService: PlacesService) { 
    this.images = [
      {"url":"./assets/images/design/list.jpg",
       "title":"Aliquam erat volutpat",
       "caption":"imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit."
      },
      {"url":"./assets/images/design/room.jpeg",
       "title":"Aliquam erat volutpat",
       "caption":"imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit."
      },
      {"url":"./assets/images/design/list.jpg",
       "title":"Aliquam erat volutpat",
       "caption":"imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit."
      },
      {"url":"./assets/images/design/room.jpeg",
       "title":"Aliquam erat volutpat",
       "caption":"imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit."
      },
      {"url":"./assets/images/design/list.jpg",
        "title":"Aliquam erat volutpat",
       "caption":"imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit."
      },
      {"url":"./assets/images/design/room.jpeg",
        "title":"Aliquam erat volutpat",
       "caption":"imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit."
      },
      {"url":"./assets/images/design/list.jpg",
        "title":"Aliquam erat volutpat",
       "caption":"imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit."
      }
      ];
  }

  ngOnInit() {
  	this.starsCount = 2.5;
    this.sub = this.route.params.subscribe(params => {
        let id = params['id'];
        let str = params['string'];
       // Retrieve Pet with Id route param
       this._placesService.findPetById(id).subscribe(place => {
         this.place = place;
         this.lat = this.place.lat;
         this.lng = this.place.lng;
         this.starsCount = this.place.rating;
       });

    });

    
  }

   ngOnDestroy() {
      // Clean sub to avoid memory leak
    this.sub.unsubscribe();
  }
}
