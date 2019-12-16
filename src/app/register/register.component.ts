import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';

import { MustMatch } from '../_helpers/must-match.validator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

  export class RegisterComponent implements OnInit {
   registerForm: FormGroup;
    submitted = false; 
    constructor(private formBuilder:FormBuilder,private http:HttpClient){}

    ngOnInit() {
      this.registerForm=this.formBuilder.group({
        firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required]
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });
      
    }

     // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

//https://5df7da614fdcb20014a48573.mockapi.io

     //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));

// /https://www.mockapi.io/projects/5df7da614fdcb20014a48574

        this.http.post("https://5df7da614fdcb20014a48573.mockapi.io/user",JSON.stringify(this.registerForm.value))
    .subscribe(
        (val) => {
            console.log("POST call successful value returned in body", 
                        val);
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });


    }
}
