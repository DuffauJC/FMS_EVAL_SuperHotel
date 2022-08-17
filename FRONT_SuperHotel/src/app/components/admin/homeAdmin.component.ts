import { Component, OnInit} from '@angular/core';
import { AuthenticateService } from '../../services/authentificate.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-admin',
    templateUrl: 'homeAdmin.component.html'
})

export class HomeAdminComponent implements OnInit {
    problemAdmin = false
    constructor(private router: Router, public authenticateService: AuthenticateService) { }

    ngOnInit() { }

   
    addCity() {
        this.router.navigateByUrl('addCity')
    }
    showCity() {
        this.router.navigateByUrl('listCity')
    }
    addTheater() {
        this.router.navigateByUrl('addHotel') 
    }
    showTheaters() {
        this.router.navigateByUrl('listHotels')
    }
    addMovie() {
        this.router.navigateByUrl('addGestionnaire')
    }
    showMovies() {
        this.router.navigateByUrl('listGestionnaires')
    }
}