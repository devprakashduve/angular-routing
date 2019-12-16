import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { fakeBackendProvider } from './_helpers';

import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';


import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';

@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule ,appRoutingModule,HttpClientModule ],
  declarations: [ AppComponent,HomeComponent, LoginComponent, RegisterComponent ],
  providers: [
        // provider used to create fake backend
        fakeBackendProvider
    ],
  bootstrap:    [ AppComponent ]

})
export class AppModule { }
