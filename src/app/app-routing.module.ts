import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './main/app.component';
import { AssetsComponent } from './assets/assets.component';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth/auth.service';
const routes: Routes = [
   {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Submit your cv and wait'
    }
  },
  {
   path: '',
   redirectTo: '/home',
   pathMatch: 'full'
  },
   {
    path: 'auth',
    component: AuthComponent,
    data: {
      title: 'Log in to your account'
    }
  },
   {
    path: 'assets',
    component: AssetsComponent,
    canActivate: [AuthService],
    data: {
      title: 'Submit your cv and wait'
    }
  }


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
