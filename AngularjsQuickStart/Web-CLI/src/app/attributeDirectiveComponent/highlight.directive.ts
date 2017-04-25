/**
 * Created by shinetech-yg on 4/25/2017.
 */

import { Directive, ElementRef, Input, HostListener } from "@angular/core";

@Directive({selector:'[myHighlight]'})

export class MyHighlightDirective{
  @Input("myHighlight")  highlightColor:string;
  @Input() defaultColor:string;
  @Input() highlightColorMustInput:string;
  constructor(private el:ElementRef){    }

  @HostListener("mouseenter") onMouseEnter1() {
      this.highlight(this.highlightColor|| this.defaultColor || this.highlightColorMustInput || "red");
  }

  @HostListener("mouseleave") onMouseLeave2(){
      this.highlight(null);
  }

  private highlight(color: string) {
      this.el.nativeElement.style.backgroundColor = color;
  }
}
