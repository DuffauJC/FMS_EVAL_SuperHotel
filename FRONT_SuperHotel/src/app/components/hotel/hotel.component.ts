import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chamber } from 'src/app/model/chamber.model';
import { City } from 'src/app/model/city.model';
import { Hotel } from 'src/app/model/hotel.model';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
})

export class HotelComponent implements OnInit {

  hotel: Hotel | undefined
  listChamber: Chamber[] | undefined
  error = null;
  id: number


  constructor(
    private router: Router, private apiservice: ApiService, private route: ActivatedRoute,
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.hotel = new Hotel(1, "", "", 0, "", "", 0, new City(0, ""))

  }
  ngOnInit(): void {
    this.getDetailHotel()
    this.getChamberHotel()
  }


  getDetailHotel() {
    this.apiservice.getHotelById(this.id).subscribe({
      next: (data) =>
        //console.log(data),
        this.hotel = data,
      error: (err) => this.error = err.message,
      complete: () => this.error = null
    })
  }

  getChamberHotel() {
    this.listChamber = []
    this.apiservice.getChambersByHotel(this.id).subscribe({
      next: (data) =>
        //console.log(data),
        this.listChamber = data,
      error: (err) => this.error = err.message,
      complete: () => this.error = null
    })
  }
// counter pour affichage d'étoile
  counter(i: number) {
    return new Array(i);
  }

}
