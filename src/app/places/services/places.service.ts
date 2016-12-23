import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import 'rxjs/add/operator/catch';
import { AngularFire, AuthProviders, AuthMethods, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class PlacesService {
places: FirebaseObjectObservable<any>;
placesAll: FirebaseObjectObservable<any>;
placesList: FirebaseListObservable<any[]>;
  constructor(private af: AngularFire) {
     this.placesAll = af.database.object('goaf-list-places', { preserveSnapshot: true });
     this.placesList = af.database.list('goaf-list-places');
     console.log(this.placesAll);
   }

	listPlaces(name, cat, add, lat, lng, placeID, uid, username ) {
  let places = this.af.database.object(`/goaf-list-places/${placeID}`);
  let thisgeo =  {  
                    latitude: lat  ,
                    longitude: lng 
                 };
  let openTime = {
      Monday: {
        status: 'true',
        openTime: '09:00',
        closeTime: '17:00'
      },
       Tuesday: {
        status: 'true',
        openTime: '09:00',
        closeTime: '17:00'
      },
        Wednesday: {
        status: 'true',
        openTime: '09:00',
        closeTime: '17:00'
      },
        Thursday: {
        status: 'true',
        openTime: '09:00',
        closeTime: '17:00'
      },
        Friday: {
        status: 'true',
        openTime: '09:00',
        closeTime: '17:00'
      },
        Saturday: {
        status: 'true',
        openTime: '09:00',
        closeTime: '17:00'
      },
        Sunday: {
        status: 'true',
        openTime: '09:00',
        closeTime: '17:00'
      }
  }
  return places.set({
            placeID: placeID,
            placeName: name,
            placeCat: cat,
            placeAdd: add,
            authorID: uid,
            author: username,
            rating: 0.5,
            website: "no_website",
            pPhone: "no_phone",
            openHours: openTime,
            geometry: thisgeo,
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

  updatePlaceHours(id, mSt, mOpen, mClose, tSt, tOpen, tClose, wSt, wOpen, wClose, thSt, thOpen, thClose, fSt, fOpen, fClose, sSt, sOpen, sClose, suSt, suOpen, suClose){
    const place = this.af.database.object(`/goaf-list-places/${id}`);
    let openTime = {
      Monday: {
        status: mSt,
        openTime: mOpen,
        closeTime: mClose
      },
      Tuesday: {
        status: tSt,
        openTime: tOpen,
        closeTime: tClose
      },
      Wednesday: {
        status: wSt,
        openTime: wOpen,
        closeTime: wClose
      },
      Thursday: {
        status: thSt,
        openTime: thOpen,
        closeTime: thClose
      },
      Friday: {
        status: fSt,
        openTime: fOpen,
        closeTime: fClose
      },
      Saturday: {
        status: sSt,
        openTime: sOpen,
        closeTime: sClose
      },
      Sunday: {
        status: suSt,
        openTime: suOpen,
        closeTime: suClose
      }
    }
     place.update({ openHours: openTime });
  }

  getPlacesAll() {
    return this.placesList.map(snapshot => {
      return snapshot;
    })
  }
}

