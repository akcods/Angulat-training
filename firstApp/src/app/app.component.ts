import { Component } from '@angular/core';
import { boxes } from './data/data';
import { FirstService } from './first.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'firstApp';
  teams:string[] = ["Ram", "Ragu", "Jagan", "Sanjay", "Joseph"];
  bodyColor:string="fff"
  fontFamily="Arial"
  color="#102E4B"
  backgroundColor="#0A66BE"
  fonts=["Arial","Agency FB","Comic Sans MS","Courier","Times New Roman","Forte"];
  information=boxes;
  message:string="Data not received from child";
  series:any;

  constructor(private fs:FirstService){
    this.series = this.fs.getSeries();
  }

  styleObj={
    color: "darkblue",
    backgroundColor: "rgb(206, 217, 223)"
  }

  receiveFromChild(msg:string):void{
    this.message = msg;
  }
}
