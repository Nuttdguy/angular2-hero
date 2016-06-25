import { Component, Input } from '@angular/core';
import { Hero } from '../_class/hero';

@Component({
	selector: 'my-hero-detail',
	templateUrl: 'app/hero_details/hero-detail.component.html',
	styleUrls: ['app/app.component.css']
})

export class HeroDetailComponent {
	@Input()
	hero: Hero;
}