import {Component, OnInit} from '@angular/core';

import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'my-list',
  templateUrl: './list.component.html',
  styleUrls:[ './list.component.css' ]
})

export class ListComponent {
  heroes:Hero[]=[];

  constructor(private heroService:HeroService){}

  ngOnInit():void{
    this.heroService.getHeroes()
      .then(heroes=>this.heroes=heroes);
  }
}
