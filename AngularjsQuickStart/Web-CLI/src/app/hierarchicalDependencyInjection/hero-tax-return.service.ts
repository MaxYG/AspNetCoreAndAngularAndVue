/**
 * Created by shinetech-yg on 5/12/2017.
 */
import { Injectable }    from '@angular/core';
import { Hero } from '../hero/hero';
import { HeroService } from '../hero/hero.service';
import {HeroTaxReturn} from "./HeroTaxReturn";
import {HeroTaxService} from "./HeroTaxService";
@Injectable()
export class HeroTaxReturnService {
  private currentTaxReturn:HeroTaxReturn;
  private originalTaxReturn:HeroTaxReturn;

  constructor(private heroService:HeroTaxService){}

  set taxReturn(htr:HeroTaxReturn){
    this.originalTaxReturn=htr;
    this.currentTaxReturn=htr.clone();
  }

  get taxReturn():HeroTaxReturn{
    return this.currentTaxReturn;
  }

  restoreTaxReturn(){
    this.taxReturn=this.originalTaxReturn;
  }

  saveTaxReturn(){
    this.taxReturn=this.currentTaxReturn;
    this.heroService.saveTaxReturn(this.currentTaxReturn).subscribe();
  }
}
