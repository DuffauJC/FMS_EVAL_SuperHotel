import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Hotel} from '../../model/hotel.model'
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-cityHotels',
  templateUrl: './cityHotels.component.html',
})

export class CityHotelsComponent implements OnInit{

  listHotels: Hotel[] | undefined
  cityName=""
  error = null;
 

  constructor(
    private router: Router, private apiservice: ApiService, private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.getAllHotels()
    //console.log(this.cityName)
  }
 
  getAllHotels() {
    this.listHotels = []
    this.cityName= String(this.route.snapshot.paramMap.get('name'));
    this.apiservice.getHotelByCityName(this.cityName).subscribe({
      next: (data) =>
         this.listHotels = data,
      error: (err) => this.error = err.message,
      complete: () => this.error = null
    })
  }
  onHotels(id:any) {
    this.router.navigateByUrl('hotel/'+id)
  }

}
