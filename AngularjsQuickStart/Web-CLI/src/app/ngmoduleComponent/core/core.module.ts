import {NgModule,Optional,SkipSelf,ModuleWithProviders} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MyTitleComponent} from "./my.title.component";
import {UserService} from "./user.service";

@NgModule({
  imports:[CommonModule],
  declarations:[MyTitleComponent],
  exports:[MyTitleComponent],
  providers:[UserService]
})

export class CoreModule{}
