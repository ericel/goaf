import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFire, AuthProviders, AuthMethods, FirebaseObjectObservable } from 'angularfire2';


@Injectable()
export class PlacesService {
places: FirebaseObjectObservable<any>;
placesAll: FirebaseObjectObservable<any>;

  constructor(private af: AngularFire) {
     this.placesAll = af.database.object('goaf-list-places', { preserveSnapshot: true });
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
            website: "no_website",
            pPhone: "no_phone",
            openHours: "no_hours", 
            listDate: firebase.database.ServerValue.TIMESTAMP
        });
	} 

  // Get Place by ID
  findPetById(id: string){
  
   return this.placesAll.map(snapshot => {
      
      let allPlaces = snapshot.val();
      return allPlaces[id];
      
      
    });
 
  }
}

