/**
 * Created by shinetech-yg on 4/1/2017.
 */

import {Directive,ElementRef} from "@angular/core";

@Directive({
  selector:'[my-highlight]'
})

export class MyHighlightDirective{
  constructor(el:ElementRef){
    el.nativeElement.style.backgroundColor="powderblue";
  }
}
