
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {AwesomePipe} from "./my.awesome.pipe";
import {MyHighlightDirective} from "./highlight.directive";

@NgModule({
  imports:[CommonModule],
  declarations:[AwesomePipe,MyHighlightDirective],
  exports:[AwesomePipe,MyHighlightDirective,CommonModule,FormsModule],
})

export class SharedModule{}
