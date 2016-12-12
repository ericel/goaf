import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
  lat: number;
  lng: number;
  private sub:any;

  starsCount: number;
  starsCounts: number[] = [];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  	this.starsCount = 2.5;
    this.sub = this.route.params.subscribe(params => {
        let id = params['id'];
        let str = params['string'];
        console.log(id);
        console.log(str);
       // Retrieve Pet with Id route param
       //this.petService.findPetById(id).subscribe(cat => this.cat = cat);
    });
  }
   ngOnDestroy() {
      // Clean sub to avoid memory leak
    this.sub.unsubscribe();
  }
}
