import { Component, OnInit, DoCheck } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authentificate.service';
import { ApiService } from 'src/app/services/api.service';
import { City } from 'src/app/model/city.model';


@Component({
    selector: 'app-addhotel',
    templateUrl: 'addHotel.component.html'
})

export class AddHotelComponent implements OnInit, DoCheck {

    ngForm: FormGroup
    display = false
    error = null
    data = {
       
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
    listCities: City[] | undefined
    model: City | undefined


    constructor(private apiService: ApiService,
        private router: Router, public authenticateService: AuthenticateService
    ) {
        this.ngForm = new FormGroup({
            name: new FormControl(this.data.name),
            address: new FormControl(this.data.address),
            imgName: new FormControl(this.data.imgName),
            freeChambers: new FormControl(this.data.freeChambers),
            phone: new FormControl(this.data.phone),
            stars: new FormControl(this.data.stars),
            city:new FormControl(this.data.city)
        })
    }

    ngOnInit() {
        this.formData()
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
    onSaveHotel(form: FormGroup) {
        if (confirm("Valider l'ajout de l'hotel ?")) {
            this.data.name = form.value.name
            this.data.address = form.value.address
            this.data.freeChambers = form.value.freeChambers
            this.data.phone = form.value.phone
            this.data.stars = form.value.stars
            this.data.city = form.value.city
            this.data.imgName = this.imgUrl

            
            document.getElementById('modal-btn')?.classList.toggle("is_active")

            this.apiService.uploadImage(this.file).subscribe({
                next: (data) => console.log(data)
            })
            this.apiService.saveHotel(this.data)
                .subscribe({
                    next: (data) => console.log(data),
                    error: (err) => this.error = err.message,
                    complete: () => this.router.navigateByUrl('listHotels')
                })
            this.display = true
            setTimeout(() => {
                this.display = false
                document.getElementById('modal-btn')?.classList.toggle("is_active")
                this.ngOnInit()
            }, 1500)
        }
    }
    formData() {
        this.data = {
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
    /// img 
    processFile(event: any) {
        // const file: File = event.target.files[0];
        this.file = event.target.files[0];
        // console.log(this.file.name)
        this.imgUrl = this.file.name

    }
  ////////////////
}