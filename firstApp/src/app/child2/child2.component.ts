import { Component, OnInit } from '@angular/core';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  data:any;
  constructor(private fs: FirstService) {
    this.data = this.fs.getSeries();
  }

  ngOnInit(): void {
  }

}
