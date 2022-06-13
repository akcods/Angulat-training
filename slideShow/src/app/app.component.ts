import { Component } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'slideShow';
  constructor(){
  }

  onSwiper(swiper:Event) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
  
}
