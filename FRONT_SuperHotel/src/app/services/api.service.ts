import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Hotel } from '../model/hotel.model';
import { City } from '../model/city.model';
import { Chamber } from '../model/chamber.model';


@Injectable({ providedIn: 'root' })

export class ApiService {


    token = localStorage.getItem("accessToken")
    headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
    })

    constructor(private http: HttpClient) {
        //console.log(this.headers)
    }

    public saveHotel(hotel:Hotel) {
        return this.http.post<Hotel>(environment.host + "/hotel/saveHotel", hotel, { headers: this.headers });
    }

   
    public getHotel() {
        return this.http.get<Hotel[]>(environment.host + "/hotel/all")
    }
    public getHotelByCityName(name: any) {
        return this.http.get<Hotel[]>(environment.host + "/hotel/hotelBycity/" + name)
    }
    public getHotelById(id: any) {
        return this.http.get<Hotel>(environment.host + "/hotel/" + id)
    }
    public getCities() {
        return this.http.get<City[]>(environment.host + "/city/all")
    }
    public getCitylById(id: any) {
        return this.http.get<any>(environment.host + "/city/" + id)
    }
    public getChambersByHotel(id: any) {
        return this.http.get<Chamber[]>(environment.host + "/chamber/chamberByHotel/" + id)
    }




    // login
    public login(data: any) {
        // console.log(data)
        return this.http.post<any>(environment.host + "/api/auth/signin", data)
    }

}

