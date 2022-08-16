import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Hotel } from './model/hotel.model';
import { ApiService } from './services/api.service';
import { AuthenticateService } from './services/authentificate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FRONT_SuperHotel';

  ngLoginForm: FormGroup
  ngForm: FormGroup
  error = null
  result = false
  name: String
  listHotels: Hotel[] | undefined

  // modal search
  displayStyle = "none";
  // modal login
  displayLog = "none"
  data = {
    email: "",
    password: ""
  }
  // login alert
  display = false
  problemLogin = false

  // is logged
  loggin = true
  logout = false
  admin = false
  displayName = false
  role = ""



  constructor(
    private router: Router,
    private apiService: ApiService, private authenticateService: AuthenticateService) {
    this.name = ""

    this.ngForm = new FormGroup({
      name: new FormControl(this.name),

    })
    this.ngLoginForm = new FormGroup({
      email: new FormControl(this.data.email),
      password: new FormControl(this.data.password)
    })

  }
  ngDoCheck(): void {
    this.showName()
    this.linkAdmin()
  }
  ngOnInit(): void {
    this.showName()
    this.linkAdmin()
  }
  showName() {
    this.name = this.authenticateService.getUserFromStorage().firstName
    if (this.name != "unknown") {
      this.displayName = true
      this.loggin = false
      this.logout = true
    }
  }
  onSearch(form: FormGroup) {
    this.listHotels = []
    this.result = false
    if (form.valid) {
      this.name = form.value.name

      this.apiService.getHotelByName(this.name)
        .subscribe({
          next: (data) => {
            // on ouvre la popup message en fonction de la taille du tableau
            if (data.length == 0) {
              this.result = true
            } else {
              this.listHotels = data

            }
          },
          // next: (data) => this.listHotels = data,
          error: (err) => this.error = err.message,
          complete: () => this.error = null
        })
      this.openPopup()
    }
  }
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
  onHotels(id: any) {
    this.router.navigateByUrl('Hotels/' + id)
    this.closePopup()
  }

  onLogin(form: FormGroup): void {
    //console.log(form.value);
    if (form.valid) {
      this.data.email = form.value.email
      this.data.password = form.value.password

      //console.log(this.data)
      document.getElementById('modal-btn')?.classList.toggle("is_active")
      let ok = this.authenticateService.veriFyLogin(this.data)
      if (ok) {
        this.display = true
        setTimeout(() => {
          this.display = false
          this.router.navigateByUrl('home')
          this.closeLogin()
        }, 1500)
      } else {
        this.problemLogin = true
      }
      setTimeout(() => {
        this.problemLogin = false
      }, 1500)
    }

  }

  openLogin() {
    this.displayLog = "block";
  }
  closeLogin() {
    this.displayLog = "none";
  }
  linkAdmin() {
    this.role = this.authenticateService.getUserFromStorage().role
    if (this.role === "admin") {
      this.admin = true
    }
  }
  disconnect() {
    this.authenticateService.removeUserFromStorage()
    this.displayName = false
    this.loggin = true
    this.logout = false
    this.admin = false
  }
}
