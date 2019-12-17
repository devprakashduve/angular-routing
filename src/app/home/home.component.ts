import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private httpClient: HttpClient) { }

  ngOnInit() { 
     

  }
 
//this.httpClient.get('https://5df7da614fdcb20014a48573.mockapi.io/user').subscribe((res)=>{
  //          console.log(res);
    //    });

    this.httpClient.get('https://5df7da614fdcb20014a48573.mockapi.io/user').subscribe((res : any[])=>{
        console.log(res);
    //    this.products = res;
        })
}