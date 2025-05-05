import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit{

  httpClient = inject(HttpClient);
  busLocationList: any[] = [];
  searchBusObj:any;
   ngOnInit(): void {
    this.getAllBusLocation()
   }
  
   getAllBusLocation(){
    this.httpClient.get('https://api.freeprojectapi.com/api/BusBooking/GetBusLocations').subscribe((res:any)=>{
      this.busLocationList = res;
    })
   }searchBus(){
    
   }
  }
