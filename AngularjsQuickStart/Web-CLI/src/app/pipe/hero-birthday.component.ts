/**
 * Created by shinetech-yg on 5/15/2017.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'hero-birthday',
  template: `
        <p>The hero's birthday is {{ birthday | date }}</p>
        
        <div>learning to对管道进行参数化</div>
        `
})
export class HeroBirthdayComponent {
  birthday = new Date(1988, 3, 15); // April 15, 1988
}
