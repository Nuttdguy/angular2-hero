import { Injectable } from '@angular/core';
import { HEROES } from '../_constants/mock-heroes';
import { Hero } from '../_class/hero';

@Injectable()

export class HeroService {
	getHeroes() {
		return Promise.resolve(HEROES);
	}
	getHeroesSlowly() {
 		return new Promise<Hero[]>(resolve =>
    	setTimeout(() => resolve(HEROES), 2000) // 2 seconds
  	);
	}
}