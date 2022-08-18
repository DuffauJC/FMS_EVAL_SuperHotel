import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authentificate.service';
import { ApiService } from 'src/app/services/api.service';
import { Role } from 'src/app/model/role';



@Component({
    selector: 'app-addgestionnaire',
    templateUrl: 'addGestionnaire.component.html'
})

export class AddGestionnaireComponent implements OnInit {
    ngForm: FormGroup
    display = false
    error = ""
    data = {
        username: "",
        password: "",
        email:'',
        role: [""],
    }
   
    constructor(private apiService: ApiService,
        private router: Router,
        ) {
       
        this.ngForm = new FormGroup({
            username: new FormControl(this.data.username),
            password: new FormControl(this.data.password),
            email: new FormControl(this.data.email),
            role:new FormControl(this.data.role)
        })
    }

    ngOnInit(): void {

    }

    onSaveUser(form: FormGroup) {
        console.log(form.value)
        if (form.valid) {
            this.display = true

            this.data.username = form.value.username
            this.data.password = form.value.password;
            this.data.email = form.value.email
            
            let role = form.value.role
            this.data.role.pop()
            this.data.role.push(role)

            //console.log(this.data)

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
}