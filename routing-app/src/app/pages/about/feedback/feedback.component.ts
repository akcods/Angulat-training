import { Component, Input, OnInit } from '@angular/core';
import { Feedback } from 'src/app/models/feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  @Input("fb") current:Feedback={id:0, name:"", email:"", type:"",message:""};

  constructor() { }

  ngOnInit(): void {
  }

}
