import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {StartComponent} from "./start/start.component";
import {Mission1Component} from "./mission1/mission1.component";

const routes: Routes = [
  {path: '', component: StartComponent},
  {path: 'mission1', component: Mission1Component}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
