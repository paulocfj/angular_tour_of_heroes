import { Component, OnInit } from '@angular/core';
import { Hero } from '../entities/hero';
import { HeroService } from '../services/hero/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}
