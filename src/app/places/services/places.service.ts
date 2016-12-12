import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFire, AuthProviders, AuthMethods, FirebaseObjectObservable } from 'angularfire2';
import {Md5} from 'ts-md5/dist/md5';

@Injectable()
export class PlacesService {
places: FirebaseObjectObservable<any>;
uid: string;
username: string;
useremail: string;
placeID: any;
  constructor(private af: AngularFire) {
    
    this.af.auth.subscribe((user) => { 
    if (user) {
      this.uid = user.uid;
      this.username = user.auth.displayName;
      this.useremail = user.auth.email;
    }
   });

    this.placeID = Md5.hashStr(new Date() + this.uid + this.username + this.useremail);
    this.places = af.database.object(`/goaf-list-places/${this.placeID}`);

   }

	listPlaces(name, cat, add, lat, lng) {
  return this.places.set({
            placeID: this.placeID,
            placeName: name,
            placeCat: cat,
            placeAdd: add,
            authorID: this.uid,
            author: this.username,
            lat: lat,
            lng: lng,
            rating: 0.5, 
            listDate: firebase.database.ServerValue.TIMESTAMP
        });
	} 
}

