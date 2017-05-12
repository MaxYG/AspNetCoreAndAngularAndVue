/**
 * Created by shinetech-yg on 4/26/2017.
 */
import {Component,Injectable} from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import {HeroTax,HeroTaxReturn} from "./HeroTaxReturn";
import {HeroTaxService} from "./HeroTaxService";
@Injectable()
@Component({
  selector:"myHierarchicalDependencyInjection",
  templateUrl:"my-hierarchical-dependency-injection.component.html"
})

export class MyHierarchicalDependencyInjectionComponent{
  heroTaxs: Observable<HeroTax[]>;
  selectedTaxReturns: HeroTaxReturn[] = [];

  constructor(private heroTaxService: HeroTaxService) {
    this.heroTaxs = heroTaxService.getHeroTaxs();
  }

  showTaxReturn(heroTax: HeroTax) {
    this.heroTaxService.getTaxReturn(heroTax)
      .subscribe(htr => {
        // show if not currently shown
        if (!this.selectedTaxReturns.find(tr => tr.id === htr.id)) {
          this.selectedTaxReturns.push(htr);
        }
      });
  }

  closeTaxReturn(ix: number) {
    this.selectedTaxReturns.splice(ix, 1);
  }
}
