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
  public departmentId:any;

  constructor(
    private heroServ: HeroService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) { }

  ngOnInit(): void {
   this.getHero();
  }

  getHero(){
           // drowback of snapshot
          // console.log(this.route.snapshot.paramMap);
          // console.log(this.route.snapshot.paramMap.has('id'));
          // const id = Number(this.route.snapshot.paramMap.get('id'));
          // this.departmentId = id;
          // console.log(id);
          // this.heroServ.getHero(id)
          // .subscribe(hero => this.hero = hero);
          // console.log(this.hero);


    this.route.paramMap.subscribe((params:ParamMap) =>{
      let id = Number(params.get('id'));
      this.departmentId = id;
        console.log(this.departmentId);
        this.heroServ.getHero(this.departmentId)
    .subscribe(hero => this.hero = hero);
    console.log(this.hero);
    });
    
  }

  gotBack(){
    this.router.navigate(['/heroes']);
  }

  goBack(){
    this.location.back();
  }

  gotoPrevious(){
    let previousId = this.departmentId - 1;
    this.router.navigate(['/hero',previousId]);
  }
  gotoNext(){
    let nextId = this.departmentId + 1;
    this.router.navigate(['/hero',nextId]);
  }

  optionalBack(){
    this.router.navigate(['/heroes',{ id: this.departmentId}]);
  }
  
}
