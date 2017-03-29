/**
 * Created by shinetech-yg on 3/27/2017.
 */


import { Component,Input,trigger,state,style,transition,animate,Injectable,OnInit} from '@angular/core';

import {HeroService} from "../hero/hero.service";


@Injectable()
@Component({
  selector:'my-animations',
  styleUrls: ['my.animation.component.css'],

  templateUrl: 'my.animation.component.html',
//   template:`
// <ul>
//     <li *ngFor="let hero of heroes"
//         [@flyInOut]="'in'">
//       {{hero.Name}}
//     </li>
//   </ul>
// `,
  animations: [
    /*trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      //case1:
      /!*transition('inactive => active', animate('1000ms ease-in')),
      transition('active => inactive', animate('1000ms ease-out'))*!/
      //case2:
      // transition('inactive => active, active => inactive', animate('1000ms ease-in')),
      //case3:
      // transition('inactive <=> active', animate('1000ms ease-in')),
      //case 4:
      // transition('inactive => active', [
      //   style({
      //     backgroundColor: '#cfd8dc',
      //     transform: 'scale(2)'
      //   }),
      //   animate('800ms ease-in', style({
      //     backgroundColor: '#eee',
      //     transform: 'scale(1)'
      //   }))
      // ]),
      //case5:
      transition('* => *', [
        style({
          backgroundColor: '#cfd8dc',
          transform: 'scale(1.3)'
        }),
        animate('800ms ease-in', style({
          backgroundColor: '#eee',
          transform: 'scale(1)'
        }))
      ]),

    ]),*/

    //例子：进场与离场
    /*trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),

      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(1000)
      ]),
      transition('* => void', [
        animate(1000, style({transform: 'translateX(100%)'}))
      ])
    ])*/
//范例：从不同的状态下进场和离场
/*trigger('heroState', [
  state('inactive', style({transform: 'translateX(0) scale(1)'})),
  state('active',   style({transform: 'translateX(100%) scale(1.1)'})),
  transition('inactive => active', animate('1000ms ease-in')),
  transition('active => inactive', animate('1000ms ease-out')),
  transition('void => inactive', [
    style({transform: 'translateX(-200%) scale(1)'}),
    animate(1000)
  ]),
  transition('inactive => void', [
    animate(1000, style({transform: 'translateX(100%) scale(1)'}))
  ]),
  transition('void => active', [
    style({transform: 'translateX(200%) scale(2)'}),
    animate(1000)
  ]),
  transition('active => void', [
    animate(1000, style({transform: 'translateX(200%) scale(0)'}))
  ])
])*/

//自动属性值计算
/*trigger("shrinkOut",[
  state("in",style({height:"*"})),
  transition("* => *",[
    style({height:"*"}),
    animate(3000,style({height:0}))
  ]),
]),*/

//缓动函数
    trigger("flyInOut",[
      state("in",style({opacity:1,transform:"translateX(0)"})),

      transition("void=>*",[
        style({opacity:0,transform:"translateX(-100%)"}),
        animate("5s 2s ease-in"),
      ]),
      transition("*=>void",[
        animate("2s 10 ease-out",style({
          opacity:0,transform:"translateX(500%)"
        }))
      ]),


    ])


  ]
})
export class  MyAnimationComponent implements OnInit{

  constructor(
    private heroService:HeroService
  ){}
  heroStateChange:string;
  heroes = [];
  ngOnInit():void{

    this.getHeroes();

  }
  toggleState(hero) {

    this.heroStateChange = (this.heroStateChange === 'active' ? 'inactive' : 'active');
    hero.state = (hero.state === 'active' ? 'inactive' : 'active');

  }

  getHeroes():void{
    this.heroService.getHeroesByHttp().then(h=>this.initHeros(h));
  }

  initHeros(heros):void{
    this.heroes=heros;
  }
}
