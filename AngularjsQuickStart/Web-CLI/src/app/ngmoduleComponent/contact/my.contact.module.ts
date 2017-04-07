import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { AwesomePipe }        from '../my.awesome.pipe';
import { MyContactComponent }   from './my.contact.component';
import { ContactService }     from './my.contact.service';
import { MyHighlightDirective as ContactHighlightDirective} from '../my.highlight.directive';



@NgModule({
  imports:      [ CommonModule, FormsModule ],
  declarations: [ MyContactComponent, ContactHighlightDirective, AwesomePipe ],
  exports:      [ MyContactComponent ],
  providers:    [ ContactService ]
})
export class ContactModule { }
