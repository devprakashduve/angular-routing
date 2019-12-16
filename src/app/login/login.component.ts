import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
    submitted = false; 
    constructor(private formBuilder:FormBuilder){}

  ngOnInit() {
this.loginForm=this.formBuilder.group({
  email:['',[Validators.required,Validators.email]],
  password:['',[Validators.required, Validators.minLength(6)]]
});
  }
get f() { return this.loginForm.controls; }

onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) { 
            return;
        }

        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value))
    }
}