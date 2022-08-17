import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './components/cities/cities.component';
import { CityHotelsComponent } from './components/cityHotels/cityHotels.component';
import { HomeComponent } from './components/home/home.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { NotFoundComponent } from './components/notFound/notFound.component';


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
    path: '404', component: NotFoundComponent
  },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
