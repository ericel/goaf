import { NgModule, ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlacesComponent } from './places.component';

const routes: Routes = [
   {
    path: 'places',
    component: PlacesComponent,
    data: {
      title: 'Find a place'
    }
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacesRoutingModule {}
