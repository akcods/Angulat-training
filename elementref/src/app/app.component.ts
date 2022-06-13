import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'elementref';
  @ViewChild(ChildComponent) child!:ChildComponent;

  ngAfterViewInit() {
    console.log(this.child.whoAmI()); // I am a pup component!
  }
}
