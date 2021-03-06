import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdsenseModule } from 'ng2-adsense';
import { PlacesModule } from './places/places.module';

import { routing, appRoutingProviders }  from './app-routing.module';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { MaterialModule } from '@angular/material';
import { AgmCoreModule } from 'angular2-google-maps/core';
import {ToastModule} from 'ng2-toastr/ng2-toastr';

import { AppComponent } from './main/app.component';
import { AssetsComponent } from './assets/assets.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth/auth.service';
import {NgPipesModule} from 'ng2-pipes';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { AnimationService } from 'css-animator';
import { StickyDirective } from './directives/sticky.directive';

import { PolymerElement } from '@vaadin/angular2-polymer';


// Must export the config
export const firebaseConfig = {

  apiKey: "AIzaSyAOFWkm65uxEuHL7KXsdiOxARghf3AOP88",
  authDomain: "goaf-fb832.firebaseapp.com",
  databaseURL: "https://goaf-fb832.firebaseio.com",
  storageBucket: "goaf-fb832.appspot.com",
  messagingSenderId: "938771222972"
  
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
}

@NgModule({
  declarations: [
    AppComponent,
    AssetsComponent,
    HomeComponent,
    AuthComponent,
    HeaderComponent,
    FooterComponent,
    StickyDirective,
    PolymerElement('vaadin-combo-box'),
    PolymerElement('paper-input'),
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AdsenseModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBqIrNb1DLsN6oP97ua3YLMJx5-gUueWJU',
      libraries: ['places']
    }),
    NgPipesModule,
    ToastModule,
    PlacesModule
   
  ],
  providers: [
   AnimationService,
   AuthService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { 
  
}