import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title :string;
  names:string[];
  data:string;

  constructor(ds:DataService){
    this.title=ds.getTitle();
    this.names=ds.getNames();
  }
  
  addData(){
    this.names.push(this.data);
  }

  
}
