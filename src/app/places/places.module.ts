import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacesComponent } from './places.component';

import { routing, appRoutingProviders }  from './places-routing.module';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  providers: [
  appRoutingProviders
  ],
  declarations: [PlacesComponent]
})
export class PlacesModule { }
