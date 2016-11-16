import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing, appRoutingProviders }  from './app-routing.module';

import { AngularFireModule } from 'angularfire2';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './main/app.component';
import { AssetsComponent } from './assets/assets.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';

// Must export the config
export const firebaseConfig = {

  apiKey: "AIzaSyAOFWkm65uxEuHL7KXsdiOxARghf3AOP88",
  authDomain: "goaf-fb832.firebaseapp.com",
  databaseURL: "https://goaf-fb832.firebaseio.com",
  storageBucket: "goaf-fb832.appspot.com",
  messagingSenderId: "938771222972"
  
};

@NgModule({
  declarations: [
    AppComponent,
    AssetsComponent,
    HomeComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}