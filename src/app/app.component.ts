import { Component, OnInit } from '@angular/core';

import { Hero } from './_class/hero';
import { HeroDetailComponent } from './hero_details/hero-detail.component';
import { HeroService } from './_services/hero.service';
import { HEROES } from './_constants/mock-heroes';


@Component({ //== COMPONENT DECORATOR
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ HeroDetailComponent ], //== LETS ITS PARENT KNOW ITS CHILD COMPONENT EXIST
  providers: [ HeroService ] //== SERVICE IS ACCESSIBLE TO ALL CHILD COMPONENTS
})

//== EXPORTS CLASS FOR GLOBAL USE |&| IMPLEMENTS LIFECYCLE HOOK ONINIT
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;

  //== EACH TIME APPCOMPONENT INITS, THE METHOD IS INSTANTIATED
  ngOnInit() {
    this.getHeroes();
  }

  //== NOT QUITE SURE WHAT THIS CONSTRUCTOR DOES ... YET??
  constructor(private heroService: HeroService) {  }

  //== METHOD USE FOR GETTING DATA FROM SERVICE ANSYCHRONOUSLY 
  //== NOT SURE EXACTLY HOW |=>| IS USED ... YET??
  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  //== SETS HERO TO THE SELECTED-HERO
  onSelect(hero: Hero) { 
  	this.selectedHero = hero;
  }

}
