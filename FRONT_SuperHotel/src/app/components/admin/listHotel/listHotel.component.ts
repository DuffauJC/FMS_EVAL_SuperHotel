import { Component, DoCheck, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authentificate.service';
import { ApiService } from 'src/app/services/api.service';
//import { Theater } from 'src/app/model/theater.model';
import { City } from 'src/app/model/city.model';


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
        idCity:0
    }
    listCities: City[] | undefined
    model: City | undefined
    //listTheaters: Theater[] | undefined
    constructor(
        private apiService: ApiService,
        private router: Router, public authenticateService: AuthenticateService, 
    ) {
        this.data = {
            id: 0,
            name: "",
            address: "",
            idCity: 0
        }
        this.ngForm = new FormGroup({
            name: new FormControl(this.data.name),
            address: new FormControl(this.data.address),
            idCity:new FormControl(this.data.idCity)
        })
    }
    ngOnInit() {
     //   this.getAllTheaters()
        this.getAllCities()
    }
    ngDoCheck(): void {
        this.verifySession()
    }
    getAllCities() {
        this.listCities = []
        this.apiService.getCities().subscribe({
            next: (data) => this.listCities = data,
            error: (err) => this.error = err.message,
            complete: () => this.error = null
        })
    }
    // getAllTheaters() {
    //     this.listTheaters = []
    //     this.apiService.getTheaters().subscribe({
    //         next: (data) => this.listTheaters = data,
    //         error: (err) => this.error = err.message,
    //         complete: () => this.error = null
    //     })
    // }
    verifySession() {
        let user = this.authenticateService.getUserFromStorage()
        if (user.role != "admin") {
            this.problemAdmin = true
            setTimeout(() => {
                this.problemAdmin = false
                this.router.navigateByUrl('home')
            }, 1500)
        }
    }
 
    // openPopup(theater: Theater) {
    //     this.displayStyle = "block";
    //     this.ngForm = new FormGroup({
    //         name: new FormControl(theater.name),
    //         address: new FormControl(theater.address),
    //         idCity:new FormControl(theater.idCity)
    //     })
    //     this.data.id = theater.id
    // }
    closePopup() {
        this.displayStyle = "none";
    }
    // onUpdateTheater(form: FormGroup) {
    //     this.data.name = form.value.name
    //     this.data.address = form.value.address
    //     this.data.idCity=form.value.idCity
     
    //     document.getElementById('modal-btn')?.classList.toggle('is_active')

    //     this.apiService.updateTheater(this.data)
    //         .subscribe({
    //             next: (data) => console.log(data),
    //             error: (err) => this.error = err.message,
                
    //     })
    //     this.display = true

    //     setTimeout(() => {
    //         this.display = false
    //         this.displayStyle = "none";
    //         document.getElementById('modal-btn')?.classList.toggle('is_active')
    //         this.ngOnInit()
    //     }, 500)
    // }
    // delTheater(theater: Theater) {
    //     if (confirm("Vous êtes sur de vouloir supprimer ce cinéma ?")) {
    //         this.apiService.delTheater(theater)
    //             .subscribe({
    //                 next: (data) => console.log(data),
    //                 error: (err) => this.error = err.message,

    //             })
    //     }
    // }

}