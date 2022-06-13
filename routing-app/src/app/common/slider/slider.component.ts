import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000);
    }

    return value;
  }

  gridsize: number = 30;
  updateSetting(event:any) {
    this.gridsize = event.value/1000;
    console.log(this.gridsize);
    
  }

}
