import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Hotel } from '../model/hotel.model';
import { City } from '../model/city.model';


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
    public getHotelByName(name: any) {
        return this.http.get<Hotel[]>(environment.host + "/theaters?name=" + name)
    }
    public getCities() {
        return this.http.get<City[]>(environment.host + "/city/all")
    }

    // non utilisé
    // public getCategory(id: number) {
    //     return this.http.get<Category>(environment.host + "/category" + id)
    // }

    // public editTask(task: Tasks) {
    //     return this.http.post<Tasks>(environment.host + "/editTask", task, { headers: this.headers })
    // }

    // public getTasksBySearch(description: String) {
    //     return this.http.get<Tasks[]>(environment.host + "/task/research/" + description, { headers: this.headers })
    // }

    // public delTask(task: Tasks) {
    //     return this.http.delete(environment.host + "/task/deleteTask/" + task.id, { headers: this.headers })
    // }

    // public getUserTasksByCatId(id: number) {
    //     //console.log(id);
    //     return this.http.get<Tasks[]>(environment.host + "/task/category/" + id, { headers: this.headers });
    // }


    // login
    public login(data: any) {
        // console.log(data)
        return this.http.post<any>(environment.host + "/api/auth/signin", data)
    }

}

