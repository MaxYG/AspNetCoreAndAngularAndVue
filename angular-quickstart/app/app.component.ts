import {Component} from '@angular/core';



@Component({
    selector:'My-app',
    template:`
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details</h2>

    <h2>my heroes</h2>
    <ul class="heroes">
        <li *ngFor="let hero of heroes">
            <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
    </ul>

    <div><label>Id:</label>{{hero.id}}</div>
    <div>
        <label>Name:</label>
        <input [(ngModel)]="hero.name" placeholder="name">
    </div>`
})

export class AppComponent{
    title = 'Tour of Heroes';
    heroes = HEROES;
    hero : Hero={
        id:1,
        name:'windstorm'
    };
}

export class Hero{
    id:number;
    name:string;
}

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
