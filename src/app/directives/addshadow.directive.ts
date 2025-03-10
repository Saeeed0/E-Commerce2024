import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAddshadow]'
})
export class AddshadowDirective {
  constructor(private ele:ElementRef) { 
    this.ele.nativeElement.style.backgroundColor=this.bgColorDefault
  }
  
  bgColorDefault:string='orange';
  @Input('appAddshadow') bgColor:string='red';
  @HostListener('mouseover') onmouseover(){
    this.ele.nativeElement.style.boxShadow='5px 5px 5px grey'; 
    this.ele.nativeElement.style.transition='0.5s'; 
    this.ele.nativeElement.style.borderRadius='10px'; 
    this.ele.nativeElement.style.backgroundColor=this.bgColor;
  }
  @HostListener('mouseout') onmouseout(){
    this.ele.nativeElement.style.boxShadow='0px 0px 0px grey';  
    this.ele.nativeElement.style.borderRadius='0px'; 
    this.ele.nativeElement.style.backgroundColor=this.bgColorDefault;

  }
}
