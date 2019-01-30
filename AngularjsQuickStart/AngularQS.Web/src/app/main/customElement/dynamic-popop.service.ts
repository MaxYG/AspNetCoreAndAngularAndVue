import { Injectable, Injector, ApplicationRef, 
    ComponentFactoryResolver } from '@angular/core';
    import { NgElement, WithProperties } from '@angular/elements';
import {DynamicPopupComponent} from './dynamic-popup.component'

@Injectable()
export class DynamicPopupService {
  constructor(private injector: Injector,
              private applicationRef: ApplicationRef,
              private componentFactoryResolver: ComponentFactoryResolver) {}
 
  // Previous dynamic-loading method required you to set up infrastructure
  // before adding the popup to the DOM.
  showAsComponent(message: string) {
    // Create element
    const popup = document.createElement('dynamic-popup-component');
 
    // Create the component and wire it up with the element
    const factory = this.componentFactoryResolver.resolveComponentFactory(DynamicPopupComponent);
    const dynamicPopupComponentRef = factory.create(this.injector, [], popup);
 
    // Attach to the view so that the change detector knows to run
    this.applicationRef.attachView(dynamicPopupComponentRef.hostView);
 
    // Listen to the close event
    dynamicPopupComponentRef.instance.closed.subscribe(() => {
      document.body.removeChild(popup);
      this.applicationRef.detachView(dynamicPopupComponentRef.hostView);
    });
 
    // Set the message
    dynamicPopupComponentRef.instance.message = message;
 
    // Add to the DOM
    document.body.appendChild(popup);
  }
 
  // This uses the new custom-element method to add the popup to the DOM.
  showAsElement(message: string) {
    // Create element
    const popupEl: NgElement & WithProperties<DynamicPopupComponent> = document.createElement('dynamic-popup-element') as any;
 
    // Listen to the close event
    popupEl.addEventListener('closed', () => document.body.removeChild(popupEl));
 
    // Set the message
    popupEl.message = message;
 
    // Add to the DOM
    document.body.appendChild(popupEl);
  }
}