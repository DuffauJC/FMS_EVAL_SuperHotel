import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCityComponent } from './components/admin/addCity/addCity.component';
import { AddGestionnaireComponent } from './components/admin/addGestionnaire/addGestionnaire.component';
import { AddHotelComponent } from './components/admin/addHotel/addHotel.component';
import { HomeAdminComponent } from './components/admin/homeAdmin.component';
import { ListCityComponent } from './components/admin/listCity/listCity.component';
import { ListGestionnaireComponent } from './components/admin/listGestionnaire/listGestionnaire.component';
import { ListHotelComponent } from './components/admin/listHotel/listHotel.component';
import { CitiesComponent } from './components/cities/cities.component';
import { CityHotelsComponent } from './components/cityHotels/cityHotels.component';
import { HotelComponent } from './components/hotel/hotel.component';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    CityHotelsComponent,
    HotelComponent,
    HomeAdminComponent,
    AddCityComponent,
    AddHotelComponent,
    ListCityComponent,
    ListHotelComponent,
    AddGestionnaireComponent,
    ListGestionnaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
