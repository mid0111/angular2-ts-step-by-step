import {Component, OnInit} from 'angular2/core';

import {Hero} from './hero';

import {HeroService} from './hero.service';
import {HeroComponent} from './hero.component';

@Component({
  selector: 'my-app',
  template:`
    <h1>{{title}}</h1>
    <my-heroes></my-heroes>
    `,
  directives: [HeroComponent],
  providers: [HeroService]
})

export class AppComponent implements OnInit {
  public title = 'Tour of Heroes';
}
