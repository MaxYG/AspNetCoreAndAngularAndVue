import { Component, Injector } from "@angular/core";
import { DynamicPopupService } from './dynamic-popop.service';
import { createCustomElement } from '@angular/elements';
import { DynamicPopupComponent } from './dynamic-popup.component';


@Component({
    selector:"custom-element",
    templateUrl:"./custom-element.component.html"
})

export class CustomElementComponent{
    
    constructor(injector:Injector,
        public popup:DynamicPopupService){
       
        const DynamicPopupElement=createCustomElement(DynamicPopupComponent,{injector});
        customElements.define('dynamic-popup-element',DynamicPopupElement);
    }

    
}