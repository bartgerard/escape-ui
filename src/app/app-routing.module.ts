import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {StartComponent} from "./component/start/start.component";
import {Mission1Component} from "./component/mission1/mission1.component";
import {BombComponent} from "./component/bomb/bomb.component";
import {Mission3Component} from "./component/mission3/mission3.component";
import {Mission2Component} from "./component/mission2/mission2.component";
import {Mission4Component} from "./component/mission4/mission4.component";
import {OverviewComponent} from "./component/overview/overview.component";
import {Bomb2Component} from "./component/bomb2/bomb2.component";
import {EndComponent} from "./component/end/end.component";

const routes: Routes = [
  {path: '', component: StartComponent},
  {path: 'start', component: StartComponent},
  {path: 'mission1', component: Mission1Component},
  {path: 'mission2', component: Mission2Component},
  {path: 'mission3', component: Mission3Component},
  {path: 'mission4', component: Mission4Component},
  {path: 'overview', component: OverviewComponent},
  {path: 'end', component: EndComponent},
  {path: 'bomb', component: BombComponent},
  {path: 'bomb2', component: Bomb2Component}
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
