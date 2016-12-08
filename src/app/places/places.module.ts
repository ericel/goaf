import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
    RatingModule
  ],
  providers: [
  
  ],
  declarations: [
    PlacesComponent,
    ListComponent, 
    HeaderComponent,
    FooterComponent,
    PlaceComponent
  ],
  bootstrap: [PlacesComponent]
})
export class PlacesModule { }
