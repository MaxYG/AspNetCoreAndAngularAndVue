import {Pipe,PipeTransform} from "@angular/core";
import {Study} from "./hero-birthday.component";



@Pipe({name:"exponentialStrength"})
export class ExponentialStrength implements PipeTransform{
    transform(value: number, exponent:string):number {
        let exp=parseFloat(exponent);
        return Math.pow(value,isNaN(exp)?1:exp);
    }
}

@Pipe({name:"flyingStudies"})
export class FlyingStudies implements PipeTransform{
  transform(allStudies:Study[]): any {
    let result= allStudies.filter(x => x.IsLogin);

    return result;
  }
}

@Pipe({
  name: 'flyingStudyImpure',
  pure: false
})
export class FlyingStudyImpurePipe extends FlyingStudies {

}
