import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  arr:string[]=[];
  cityName:string[]=["Los Angeles", "New York", "Delhi", "Singapore", "Sydney"];
  num:number=0;

  constructor() { 
    this.arr = ["la", "nyc", "delhi", "singapore", "sydney"];
    setInterval(()=>{
      this.num++;
      if(this.num === 5){
        this.num = 0;
        return this.num;
      }
      else{
        console.log(this.num);
        return this.num;
      }
    },3000)
  }
  
  ngOnInit(): void {

    var slideIndex = 0;
    
    /* function showSlides() {
      var i;
      var slides:any = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      slides[slideIndex-1].style.display = "block";  
      setTimeout(showSlides, 3000);
    }
    showSlides(); */

    
  }

}
