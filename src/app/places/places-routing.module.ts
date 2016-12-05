import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlacesComponent } from './places.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { AuthService } from '../auth/auth.service';
const routes: Routes = [
   {
    path: 'places?home',
    component: PlacesComponent,
    data: {
      title: 'Find a place'
    }
  },
  {
    path: 'places',
    component: HomeComponent,
    data: {
      title: 'Home a place'
    }
  }
  ,
  {
    path: 'place/list',
    component: ListComponent,
    canActivate: [AuthService],
    data: {
      title: 'List A Place'
    }
  }
];

/*@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})*/


export const PlacesRouting: ModuleWithProviders = RouterModule.forRoot(routes);
