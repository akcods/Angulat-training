import { Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[scroll]'
})
export class ScrollDirective {
  @Input() scroll!:number;

  constructor(private el:ElementRef) {}

   @HostListener("click") 
   onClick():void{
       
    let temp=this.el.nativeElement.parentNode;
    temp=temp.children[3];
    temp.scrollTo({ left: (temp.scrollLeft + this.scroll), behavior: 'smooth' });
   }
};