import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadingComponent } from './topheading/topheading.component';
import { TechnologyComponent } from './technology/technology.component';
import { BusinessComponent } from './business/business.component';
import { TechcrunchComponent } from './techcrunch/techcrunch.component';
import { DomainComponents } from './domain/domain.component';

const routes: Routes = [
  {path:'',component:TopheadingComponent}, // home
  {path:'tech',component:TechnologyComponent} , // tech news
  {path:'business',component:BusinessComponent} , // busines
  {path:'techcrunch',component:TechcrunchComponent} , // busines
  {path:'domain',component:DomainComponents} , // busines
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
