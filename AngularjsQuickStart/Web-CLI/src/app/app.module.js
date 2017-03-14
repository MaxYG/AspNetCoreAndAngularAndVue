"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
require("./rxjs-extensions");
var app_routing_module_1 = require("./app-routing.module");
//imports for loading & configuring the in memory web api
//import {InMemoryDataService} from './in-memory-data.service';
var app_component_1 = require("./app.component");
var heroes_component_1 = require("./hero/heroes.component");
var hero_detail_component_1 = require("./hero/hero-detail.component");
var hero_service_1 = require("./hero/hero.service");
var dashboard_component_1 = require("./hero/dashboard.component");
var hero_search_component_1 = require("./hero/hero-search.component");
var user_input_component_1 = require("./hero/user-input.component");
var internationalization_component_1 = require("./hero/internationalization.component");
var delete_modal_component_1 = require("./commonComponent/delete.modal.component");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_module_1.AppRoutingModule,
            http_1.HttpModule,
            ng2_bootstrap_1.ModalModule.forRoot()
        ],
        declarations: [
            app_component_1.AppComponent,
            heroes_component_1.HeroesComponent,
            hero_detail_component_1.HeroDetailComponent,
            dashboard_component_1.DashboardComponent,
            hero_search_component_1.HeroSearchComponent,
            user_input_component_1.UserInputComponent,
            internationalization_component_1.InternationalizationComponent,
            delete_modal_component_1.DeleteModalComponent
        ],
        providers: [
            hero_service_1.HeroService
        ],
        bootstrap: [app_component_1.AppComponent],
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map