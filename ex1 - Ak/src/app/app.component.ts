import { Component } from '@angular/core';
import { ServicesService } from './service/services.service';
import { prizes } from './table4/table4.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ex1';
  noblePrizes:prizes[]=[];
  categories:string[]=["All", "physics", "chemistry", "medicine", "peace", "economics", "literature"];
  years:any[]=["All"];
  selectedYear:string="All";
  selectedCategory:string="All";

  constructor(private ss:ServicesService){

    this.ss.getPrize().subscribe({
      next:(data:any)=>this.noblePrizes = data,
      error:()=>this.noblePrizes = []
    });

    console.log(this.selectedCategory);
    console.log(this.selectedYear);
    

    for(let i = 1901; i<2022; i++){
      this.years.push(i)
    }
  }
  
}
