import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';

const heroroutes: Routes = [
  {
    path:'heroes',
    component: HeroListComponent
  },
  {
    path:'hero/:id',
    component:HeroDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(heroroutes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
