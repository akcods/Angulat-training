import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sampleapp';

  x:string="India";
  y:string="China";
  @ViewChild('one', {static: false}) one!: ChildComponent;
  @ViewChild('two', {static: false}) two!: ChildComponent;

  ngAfterContentInit(){
    console.log("parent content initialized")
  }
  toggle(){
    let temp = this.x;
    this.x = this.y;
    this.y = temp;
  }

  ngAfterViewInit() {
    console.log("parent view Ready")
    console.log('parent view  ', this.two?.data); 
    console.log('parent view ', this.one?.data); 
    console.log('parent view', this.one); 
  }

}
