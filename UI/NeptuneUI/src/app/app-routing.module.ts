import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BeverageComponent} from './beverage/beverage.component';
import {BeveragetypeComponent} from './beveragetype/beveragetype.component';

//if users type url:\\beverage or beveragetype, we want to route there
const routes: Routes = [
{path: 'beverage', component:BeverageComponent},
{path: 'beveragetype', component:BeveragetypeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
