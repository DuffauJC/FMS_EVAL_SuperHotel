import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCityComponent } from './components/admin/addCity/addCity.component';
import { AddHotelComponent } from './components/admin/addHotel/addHotel.component';
import { HomeAdminComponent } from './components/admin/homeAdmin.component';
import { ListCityComponent } from './components/admin/listCity/listCity.component';
import { ListGestionnaireComponent } from './components/admin/listGestionnaire/listGestionnaire.component';
import { ListHotelComponent } from './components/admin/listHotel/listHotel.component';
import { CitiesComponent } from './components/cities/cities.component';
import { CityHotelsComponent } from './components/cityHotels/cityHotels.component';
import { HomeComponent } from './components/home/home.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { NotFoundComponent } from './components/notFound/notFound.component';
import { AuthGuard } from './components/_helpers/authGuard.components';
import { Role } from './model/role';


const routes: Routes = [
  {
    path: 'cities', component: CitiesComponent
  },
  {
    path: 'cityHotels/:name', component: CityHotelsComponent
  },
  {
    path: 'hotel/:id', component: HotelComponent
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'admin',
    component: HomeAdminComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  }, 
  {
    path: 'addCity',
    component: AddCityComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'listCity',
    component: ListCityComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'listHotels',
    component: ListHotelComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'addHotel',
    component: AddHotelComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'listGestionnaire',
    component: ListGestionnaireComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'addGestionnaire',
    component: ListGestionnaireComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: '404', component: NotFoundComponent
  },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
