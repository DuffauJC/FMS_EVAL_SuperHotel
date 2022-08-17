import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitiesComponent } from './components/cities/cities.component';
import { CityHotelsComponent } from './components/cityHotels/cityHotels.component';
import { HotelComponent } from './components/hotel/hotel.component';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    CityHotelsComponent,
    HotelComponent,
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
