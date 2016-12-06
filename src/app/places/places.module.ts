import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { PlacesComponent } from './places.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { PlacesRouting }  from './places-routing.module';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    PlacesRouting,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBqIrNb1DLsN6oP97ua3YLMJx5-gUueWJU'
    }),
     MaterialModule.forRoot()
  ],
  providers: [
  
  ],
  declarations: [
    PlacesComponent,
    HomeComponent, 
    ListComponent, 
    HeaderComponent,
    FooterComponent
  ],
  bootstrap: [PlacesComponent]
})
export class PlacesModule { }
