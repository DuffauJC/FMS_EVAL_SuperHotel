import { Component, DoCheck, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit, DoCheck {
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
    username: "",
    password: ""
  }
  // login alert
  display = false
  problemLogin = false

  // is logged
  loggin = true
  logout = false
  admin = false
  gestion = false
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
      username: new FormControl(this.data.username),
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
    let rep = this.authenticateService.getUserFromStorage()
    if (rep != null) {
      this.name = rep.username
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

      this.apiService.getHotelByCityName(this.name)
        .subscribe({
          next: (data) => {
            // on ouvre la popup message en fonction de la taille du tableau
            if (data == null) {
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
    this.router.navigateByUrl('hotel/' + id)
    this.closePopup()
  }

  onLogin(form: FormGroup): void {
    //console.log(form.value);
    if (form.valid) {
      this.data.username = form.value.username
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
    let user = this.authenticateService.getUserFromStorage()
    if (user) {
      for (let i = 0; i < user.roles.length; i++) {
        if (user.roles[i] === "ROLE_ADMIN") {
          this.admin = true
        }
        if (user.roles[i] === "ROLE_GESTIONNAIRE") {
          this.gestion = true
        }
      }
    }

  }


  disconnect() {
    this.authenticateService.removeUserFromStorage()
    this.displayName = false
    this.loggin = true
    this.logout = false
    this.admin = false
    this.gestion=false
    this.ngOnInit()
    this.router.navigateByUrl('home')
  }
}
