import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroesList?:Hero[];
  selectedId:number =0;

  constructor(private heroService : HeroService,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap) =>{
      this.selectedId = Number(params.get('id'));
    })
    this.getHeroes();
  }

  getHeroes(){
    this.heroService.getHeroes().subscribe((heroes) =>{
      this.heroesList = heroes;
    })
  }
}
