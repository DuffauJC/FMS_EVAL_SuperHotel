import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Hotel } from '../model/hotel.model';
import { City } from '../model/city.model';
import { Chamber } from '../model/chamber.model';
import { Observable } from 'rxjs';


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

  
//    get //////
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

    // post //////
    public saveHotel(data: any) {
        return this.http.post<any>(environment.host + "/hotel/saveHotel", data, { headers: this.headers });
    }

    public saveCity(data:any) {
        return this.http.post<any>(environment.host + "/city/saveCity", data, { headers: this.headers });
    }

// del /////
    public delCity(data: any) {
        return this.http.delete<any>(environment.host + "/city/deleteCity/"+ data, { headers: this.headers });
    }
    public delHotel(data: any) {
        return this.http.delete<any>(environment.host + "/hotel/deleteHotel/" + data, { headers: this.headers });
    }

    // login
    public login(data: any) {
        // console.log(data)
        return this.http.post<any>(environment.host + "/api/auth/signin", data)
    }
    // upload img
    public uploadImage(file: File): Observable<Response> {
        const formData: FormData = new FormData();
        formData.append('file', file);
        return this.http.post<any>(environment.host + "/api/uploadfile", formData)
    }

}

