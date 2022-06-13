import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input() fFamily?:string;
  @Input() bgColor!:string;
  @Input() tColor:string="";

  title:string="BOX";
  colors:string[]=["violet","green","blue","yellow","black","white"]
  styleit:any={backgroundColor: 'yellow', fontFamily: 'arial', color: 'red'}
  classStyle:any={ card: true, dark: true, flat: true };
  msg:string="";
  bColor:string="#297ED2"
  constructor() { }

  ngOnInit(): void {}
    
  ngOnChanges(): void {
    this.styleit={backgroundColor: this.bgColor, fontFamily: this.fFamily, color: this.tColor};
  }

  btn(){
    this.classStyle.flat = !this.classStyle.flat ; 
    this.classStyle.card = !this.classStyle.card ; 
    this.classStyle.dark = !this.classStyle.dark;
    console.log(this.classStyle.flat);
    console.log(this.classStyle.dark);
    console.log(this.classStyle.card);
  }
  

  process(x:string):void{
    this.styleit.backgroundColor = x;
  }

}
