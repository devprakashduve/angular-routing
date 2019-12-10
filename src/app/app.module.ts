import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { HelloComponent } from './hello.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';

@NgModule({
  imports:      [ BrowserModule, FormsModule,appRoutingModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, LoginComponent, RegisterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
