import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {

 items: FirebaseListObservable<any[]>;
 constructor(af: AngularFire) {
	    this.items = af.database.list('/items');
  }
 

  ngOnInit() {
  }

}
