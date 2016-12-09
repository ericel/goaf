import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PolymerElement } from '@vaadin/angular2-polymer';
import {NgPipesModule} from 'ng2-pipes';
import { MaterialModule } from '@angular/material';
import { PlacesComponent } from './places.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { PlacesRouting }  from './places-routing.module';
import { ListComponent } from './list/list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PlaceComponent } from './place/place.component';
import { AdsenseModule } from 'ng2-adsense';
import {RatingModule} from "ng2-rating";
import { Header2Component } from './2-header/2-header.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PlacesRouting,
    AdsenseModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBqIrNb1DLsN6oP97ua3YLMJx5-gUueWJU'
    }),
     MaterialModule.forRoot(),
    RatingModule,
    NgPipesModule
  ],
  providers: [
  
  ],
  declarations: [
    PlacesComponent,
    ListComponent, 
    HeaderComponent,
    FooterComponent,
    PlaceComponent,
    Header2Component,
    PolymerElement('vaadin-combo-box'),
    PolymerElement('paper-input')   
  ],
  bootstrap: [PlacesComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PlacesModule { }
