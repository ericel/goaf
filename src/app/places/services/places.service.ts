import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFire, AuthProviders, AuthMethods, FirebaseObjectObservable } from 'angularfire2';


@Injectable()
export class PlacesService {
places: FirebaseObjectObservable<any>;

  constructor(private af: AngularFire) {
    
   }

	listPlaces(name, cat, add, lat, lng, placeID, uid, username ) {
  let places = this.af.database.object(`/goaf-list-places/${placeID}`);
  return places.set({
            placeID: placeID,
            placeName: name,
            placeCat: cat,
            placeAdd: add,
            authorID: uid,
            author: username,
            lat: lat,
            lng: lng,
            rating: 0.5, 
            listDate: firebase.database.ServerValue.TIMESTAMP
        });
	} 
}

