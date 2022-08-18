import { Component, DoCheck, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authentificate.service';
import { ApiService } from 'src/app/services/api.service';
import { User } from 'src/app/model/user.model';
import { Roles } from 'src/app/model/roles.model';



@Component({
    selector: 'app-listgestionnaire',
    templateUrl: 'listGestionnaire.component.html'
})

export class ListGestionnaireComponent implements OnInit, DoCheck {
    ngForm: FormGroup
    error = null
    displayStyle = "none";
    display = false


    data = {
        id:0,
        username: "",
        password: "",
        email: '',
        roles: [""],
    }

    listUsers: User[] | undefined

    constructor(
        private apiService: ApiService,
        private router: Router, public authenticateService: AuthenticateService,
    ) {
        this.listUsers = []
        this.ngForm = new FormGroup({
            username: new FormControl(this.data.username),
            password: new FormControl(this.data.password),
            email: new FormControl(this.data.email),
            roles: new FormControl(this.data.roles)
        })
    }
    ngOnInit() {
        this.getAllUsers()

    }
    ngDoCheck(): void {

    }

    getAllUsers() {
        this.apiService.getUsers().subscribe({
            next: (data) => {
              console.log(data),
                this.listUsers = data
        }, 
            error: (err) => this.error = err.message,
            complete: () => this.error = null 
        })
    }


    openPopup(user: User) {
        this.displayStyle = "block";
        this.ngForm = new FormGroup({
            username: new FormControl(user.username),
            email: new FormControl(user.email),
            roles: new FormControl(user.roles),
            password: new FormControl(user.password),
        })
        this.data.id = user.id
    }
    closePopup() {
        this.displayStyle = "none";
    }
    onSaveUser(form: FormGroup) {
        console.log(form.value)
        if (form.valid) {
            this.display = true

            this.data.username = form.value.username
            this.data.password = form.value.password;
            this.data.email = form.value.email

            let role = form.value.roles
            this.data.roles.pop()
            this.data.roles.push(role)

            console.log(this.data)

            this.apiService.saveUser(this.data)
                .subscribe({
                    next: (data) => console.log(data),
                    error: (err) => this.error = err.message,
                })
            setTimeout(() => {
                this.display = false
                this.router.navigateByUrl('admin')
            }, 1500)
        }
    }
    delUser(user: User) {
        if (confirm("Vous êtes sur de vouloir supprimer cet utilisateur ?")) {
            this.apiService.delUser(user.id)
                .subscribe({
                    next: (data) => console.log(data),
                    error: (err) => this.error = err.message,

                })
        }
    }


}