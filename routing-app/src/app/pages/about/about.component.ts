import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/services/about.service';
import { Feedback } from 'src/app/models/feedback';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  types:string[]=["All", "Branding and Communication", "Digital Marketing", "ECommerce & Websites", "Film & Webinar",  "Inbound & Content Marketing", "Market Analysis"]
  now:string="All";
  revenue:number=50;
  feedback:Feedback[]=[];

  constructor(private as:AboutService) { 
    this.as.getFeedback().subscribe({
      next:(data:any)=>this.feedback=data,
      error:()=>this.feedback=[]
    });
  }



  ngOnInit(): void {
  }

}
