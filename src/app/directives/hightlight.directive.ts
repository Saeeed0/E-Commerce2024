import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() extrnalColor: string = 'red';
  @Input('appHighlight') defaultColor: string = 'pink';
  constructor(private ele: ElementRef) {
    this.ele.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseover') mouseOver() {
    this.ele.nativeElement.style.backgroundColor = this.extrnalColor;
  }
  @HostListener('mouseout') mouseleave() {
    this.ele.nativeElement.style.backgroundColor = this.defaultColor;
  }
}
