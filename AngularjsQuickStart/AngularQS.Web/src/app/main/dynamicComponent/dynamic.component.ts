import { Component } from "@angular/core";
import { AdItem, AdService } from '.';

@Component({
    selector:'app-dynamic-component',
    template:`
    <div>
      <app-ad-banner [ads]="ads"></app-ad-banner>
    </div>
  `
})

export class DynamicComponent{
    ads: AdItem[];
    constructor(private adService: AdService) {}

  ngOnInit() {
    this.ads = this.adService.getAds();
  }
}