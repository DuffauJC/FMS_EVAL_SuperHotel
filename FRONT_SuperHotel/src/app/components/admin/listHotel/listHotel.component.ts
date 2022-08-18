import { Component, DoCheck, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authentificate.service';
import { ApiService } from 'src/app/services/api.service';
import { City } from 'src/app/model/city.model';
import { Hotel } from 'src/app/model/hotel.model';


@Component({
    selector: 'app-listhotel',
    templateUrl: 'listHotel.component.html'
})

export class ListHotelComponent implements OnInit, DoCheck {
    ngForm: FormGroup
    error = null
    displayStyle = "none";
    display = false
    problemAdmin = false

    data = {
        id: 0,
        name: "",
        address: "",
        freeChambers: 3,
        imgName: "unknown.png",
        phone: "",
        stars: 2,
        city: {} as City
    }
    file!: File;
    imgUrl = ""
    selectedFile = false
    listHotels: Hotel[] | undefined
    listCities: City[] | undefined
    model: City | undefined

    constructor(
        private apiService: ApiService,
        private router: Router, public authenticateService: AuthenticateService,
    ) {
        this.data = {
            id: 0,
            name: "",
            address: "",
            freeChambers: 3,
            imgName: "unknown.png",
            phone: "",
            stars: 2,
            city: {} as City
        }
        this.ngForm = new FormGroup({
            name: new FormControl(this.data.name),
            address: new FormControl(this.data.address),
            imgName: new FormControl(this.data.imgName),
            freeChambers: new FormControl(this.data.freeChambers),
            phone: new FormControl(this.data.phone),
            stars: new FormControl(this.data.stars),
            city: new FormControl(this.data.city)
        })
    }
    ngOnInit() {
        this.getAllHotels()
        this.getAllCities()
    }
    ngDoCheck(): void {

    }
    getAllCities() {
        this.listCities = []
        this.apiService.getCities().subscribe({
            next: (data) => this.listCities = data,
            error: (err) => this.error = err.message,
            complete: () => this.error = null
        })
    }
    getAllHotels() {
        this.listHotels = []
        this.apiService.getHotel().subscribe({
            next: (data) =>
                this.listHotels = data,
            error: (err) => this.error = err.message,
            complete: () => this.error = null
        })
    }


    openPopup(hotel: Hotel) {
        this.displayStyle = "block";
        this.ngForm = new FormGroup({
            name: new FormControl(hotel.name),
            address: new FormControl(hotel.address),
            imgName: new FormControl(hotel.imgName),
            freeChambers: new FormControl(hotel.freeChambers),
            phone: new FormControl(hotel.phone),
            stars: new FormControl(hotel.stars),
            city: new FormControl(hotel.city)
        })
        this.data.id = hotel.id
        this.data.imgName = hotel.imgName
        this.data.city = hotel.city
    }
    closePopup() {
        this.displayStyle = "none";
    }
    onUpdateHotel(form: FormGroup) {
        if (confirm("Valider l'ajout de l'hotel ?")) {
            this.data.name = form.value.name
            this.data.address = form.value.address
            this.data.freeChambers = form.value.freeChambers
            this.data.phone = form.value.phone
            this.data.stars = form.value.stars
            this.data.city = form.value.city


            if (this.selectedFile) {
                this.data.imgName = this.file.name
            }

            document.getElementById('modal-btn')?.classList.toggle('is_active')

            this.apiService.saveHotel(this.data)
                .subscribe({
                    next: (data) => console.log(data),
                    error: (err) => this.error = err.message,

                })
            this.display = true

            setTimeout(() => {
                this.display = false
                this.displayStyle = "none";
                document.getElementById('modal-btn')?.classList.toggle('is_active')
                this.ngOnInit()
            }, 500)
        }
    }
    delHotel(hotel: Hotel) {
        if (confirm("Vous êtes sur de vouloir supprimer cet hotel ?")) {
            this.apiService.delHotel(hotel.id)
                .subscribe({
                    next: (data) => console.log(data),
                    error: (err) => this.error = err.message,
                    complete: () => this.ngOnInit()
                })
        }
    }
    processFile(event: any) {
        // const file: File = event.target.files[0];
        this.file = event.target.files[0];
        //console.log(this.file.name)
        this.selectedFile = true

    }
    ////////////////

}