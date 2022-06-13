import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  year:number = 2022;
  @Input() data:any =" Big world ";
  private childinfo:string="World is so big"
    constructor() {
       console.log(this.data, " in the constructor")
     }
  
    ngOnInit(): void {
      console.log(this.data, " in the child init method")
    }
  
    ngOnChanges(){
      console.log(this.data," New value received")
    }
  
    ngDoCheck(){
      //console.log("do check check")
    }
  
    ngAfterContentInit(){
      console.log("child content initialized")
    }
  
    ngAfterViewInit() {
      console.log('child  view', this.data); 
      
    }
  

}
