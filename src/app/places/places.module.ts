import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacesComponent } from './places.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { PlacesRouting }  from './places-routing.module';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    PlacesRouting,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBqIrNb1DLsN6oP97ua3YLMJx5-gUueWJU'
    })
  ],
  providers: [
  
  ],
  declarations: [PlacesComponent, HomeComponent, ListComponent],
  bootstrap: [PlacesComponent]
})
export class PlacesModule { }
