import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFire, AuthProviders, AuthMethods, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class PlacesService {
places: FirebaseObjectObservable<any>;
  constructor(private af: AngularFire) {
    this.places = af.database.object('/goaf-list-places', { preserveSnapshot: true });
   }

	listPlaces() {
		this.places.set({
            
        });
	} 
}

