import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.services';
import { services } from 'src/app/models/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  sList:services[]=[];
  constructor(private hs:HomeService) {
    console.log("Home component instantiated");
  }

  ngOnInit(): void {
    this.hs.getServices().subscribe({
      next:(data:services[])=>this.sList=data,
      error:(err)=>this.sList=[]
    });
  }

  ngOnDestroy(): void {
    console.log("Home component Destroyed")
  }

}
