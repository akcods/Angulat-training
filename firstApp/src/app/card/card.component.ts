import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() title!:string;
  @Input() description?:string;
  @Output('receive') sendmessage:EventEmitter<string> = new EventEmitter<string>();

  constructor(private fs:FirstService) {
  }
  
  ngOnInit(): void {
  }
  
  handle(){
    this.sendmessage.emit(`"${this.title}" : ${this.description}`)
    this.fs.setSeries(this.title);
  }

}
