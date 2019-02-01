import { Component, OnInit, OnDestroy, Input, ViewChild, ComponentFactoryResolver } from "@angular/core";
import { AdItem } from './ad-item';
import { AdDirective } from './ad.directive';
import { AdComponent } from './ad.component';

@Component({
    selector:"app-ad-banner",
    template:`
    <div class="ad-banner-example">
    <h3>Advertisements</h3>
    <ng-template ad-host></ng-template>
    </div>
  `
})
export class AdBannerComponent implements OnInit,OnDestroy{
    @Input() ads:AdItem[];
    currentAdIndex=-1;
    @ViewChild(AdDirective) adHostDirective:AdDirective;
    interval:any;
    constructor(private componentFactoryResolver:ComponentFactoryResolver){
    }

    ngOnDestroy(): void {
        clearInterval(this.interval);
    }
    ngOnInit(): void {
        this.loadComponent();
        this.getAds();
    }
    loadComponent(){
        this.currentAdIndex=(this.currentAdIndex+1)%this.ads.length;
        let adItem=this.ads[this.currentAdIndex];
        let componentFactory=this.componentFactoryResolver.resolveComponentFactory(adItem.component);
        let viewContainerRef=this.adHostDirective.viewContainerRef;
        viewContainerRef.clear();
        let componentRef=viewContainerRef.createComponent(componentFactory);
        (<AdComponent>componentRef.instance).data=adItem.data;
    }
    getAds(){
        this.interval=setInterval(()=>{
            this.loadComponent();
        },3000);
    }
}