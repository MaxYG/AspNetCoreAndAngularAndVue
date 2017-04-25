

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CrisisListComponent} from "./crisis-list.component";
import {CrisisDetailComponent} from "./crisis-detail.component";
import {CrisisService} from "./crisis.service";
import {CrisisRoutingModule} from "./crisis-routing.module";
import {CoreModule} from "../core/core.module";

@NgModule({
  imports:[CommonModule,CrisisRoutingModule,CoreModule.forRoot({userName:"Miss Marple"}),],
  declarations:[CrisisListComponent,CrisisDetailComponent],
  providers:[CrisisService]
})

export class CrisisModule{}
