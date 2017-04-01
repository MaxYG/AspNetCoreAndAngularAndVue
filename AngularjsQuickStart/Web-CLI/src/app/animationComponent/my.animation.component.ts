/**
 * Created by shinetech-yg on 3/27/2017.
 */

import {
  Component, Input, trigger, state, style, transition, animate, Injectable, OnInit,
  keyframes, group,AnimationTransitionEvent
} from '@angular/core';

import {HeroService} from "../hero/hero.service";

@Injectable()
@Component({
  selector:'my-animations',
  styleUrls: ['my.animation.component.css'],

  templateUrl: 'my.animation.component.html',
  animations: [
    //动画回调
    trigger('flyInOutCallBack', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        animate(3000, keyframes([
          style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
          style({opacity: 1, transform: 'translateX(200px)',  offset: 0.3}),
          style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
        ]))
      ]),
      /*transition('* => void', [
        animate(3000, keyframes([
          style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
          style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
          style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
        ]))
      ])*/
    ]),

    //并行动画组(Group)
    trigger("flyInOutGroup",[
        state("in",style({width:120,transform:"translateX(0)",opacity:1})),
        state("out",style({width:120,transform:"translateX(100%)",opacity:0.5})),
        transition("out=>*",[
            style({width:10,transform:"translateX(50px)",opacity:0}),
          group([
            animate("3s 1s ease",style({
              transform:"translateX(0)",
              width:120
            })),
            animate("3s ease",keyframes([
              style({opacity:1}),
            ]))
          ]),
        ]),
      transition("*=>void",[
        group([
          animate("0.3s ease",style({
            transform:"translateX(0px)",
            width:120
          })),
          animate("0.3s 0.2s ease",style({
            opacity:0.5
          })),
        ]),
      ]),
    ]),
    //基于关键帧(Keyframes)的多阶段动画2
    trigger("openClose",[
      state("collapsed,void",style({height:"0px",color:"maroon",boderColor:"maroon"})),
      state("expanded",style({height:"*",borderColor:"green",color:"green"})),
      transition("collapsed<=>expanded",[

        animate("3000ms",style({height:"300px"})),
        animate("3000ms",style({height:"100px"})),
        animate("3000ms",style({height:"300px"})),
        animate("3000ms",style({height:"100px"})),
        animate("3000ms",style({height:"300px"})),

      ]),
    ]),
    //基于关键帧(Keyframes)的多阶段动画
    trigger("flyInOutKeyframes",[
      state("in",style({transform:"translateX(0)"})),
      transition("void=>*",[
        animate("1000ms",keyframes([
          style({opacity:0,transform:"translateX(-100%)",offset:0}),
          style({opacity:1,transform:"translateX(20px)",offset:0.5}),
          style({opacity:1,transform:"translateX(0)",offset:1}),
        ]))
      ])
    ]),
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
      state("inaaa",style({opacity:1,transform:"translateX(0)"})),

      transition("void=>*",[
        style({opacity:0,transform:"translateX(-100%)"}),
        animate("3s 2s ease-in"),
      ]),
      transition("*=>void",[
        animate("2s 10 ease-out",style({
          opacity:0,transform:"translateX(500%)"
        }))
      ]),
    ]),
  ]
})
export class  MyAnimationComponent implements OnInit{

  heroStateChange:string;
  heroes = [];
  stateExpression:string;
  inOutGroupExpression:string;

  constructor(
    private heroService:HeroService,
  ){
    this.collapse();
    this.inGroupFunction();
  }

  animationStarted(event: AnimationTransitionEvent) {
    console.warn('Animation started: ', event);
    console.log("do some logic");
  }

  animationDone(event: AnimationTransitionEvent) {
    console.warn('Animation done: ', event);
    console.log("do some logic");
  }

  inGroupFunction(){
      this.inOutGroupExpression="in";
  }
  outGroupFunction(){
    this.inOutGroupExpression="out";
  }
  inOutGroupClick(){
    this.inOutGroupExpression=this.inOutGroupExpression==="in"?"out":"in";
  }

  expand(){
      this.stateExpression="expanded";
  }

  collapse(){
    this.stateExpression="collapsed";
  }

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
