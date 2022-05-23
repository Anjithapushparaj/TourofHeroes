import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero?:Hero;
  departmentId:number = 0;

  constructor(
    private heroServ: HeroService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) { }

  ngOnInit(): void {
   this.getHero();
  }

  getHero(){
    console.log(this.route.snapshot.paramMap);
    console.log(this.route.snapshot.paramMap.has('id'));
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.departmentId = id;
    console.log(id);
    this.heroServ.getHero(id)
    .subscribe(hero => this.hero = hero);
    console.log(this.hero);
  }

  gotBack(){
    this.router.navigate(['/heroes']);
  }

  goBack(){
    this.location.back();
  }

  gotoPrevious(){

  }
  gotoNext(){
    
  }
  
}
