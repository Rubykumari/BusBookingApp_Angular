import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-result-landing',
  imports: [],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.scss'
})
export class SearchResultComponent implements OnInit{

httpClient = inject(HttpClient);
busLocationList: any[] = [];

 ngOnInit(): void {
  this.getAllBusLocation()
 }

 getAllBusLocation(){
  this.httpClient.get('https://api.freeprojectapi.com/api/BusBooking/GetBusLocations').subscribe((res:any)=>{
    this.busLocationList = res;
  })
 }
}
