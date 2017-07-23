import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {StartComponent} from "./component/start/start.component";
import {Mission1Component} from "./component/mission1/mission1.component";
import {BombComponent} from "./component/bomb/bomb.component";

const routes: Routes = [
  {path: '', component: StartComponent},
  {path: 'mission1', component: Mission1Component},
  {path: 'bomb', component: BombComponent}
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
