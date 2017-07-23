import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {
  ButtonModule,
  CheckboxModule,
  DropdownModule,
  InputTextModule
} from 'primeng/primeng';
import {AppRoutingModule} from "./app-routing.module";
import {HeaderComponent} from "./component/header/header.component";
import {NavComponent} from "./component/nav/nav.component";
import {FooterComponent} from "./component/footer/footer.component";
import {StartComponent} from "./component/start/start.component";
import {Mission1Component} from "./component/mission1/mission1.component";
import {CountdownComponent} from "./component/countdown/countdown.component";
import {ButtonComponent} from "./component/button/button.component";
import {CountdownDarkComponent} from './component/countdown-dark/countdown-dark.component';
import { BombComponent } from './component/bomb/bomb.component';
import { KeyPadComponent } from './component/key-pad/key-pad.component';
import { Base4Component } from './component/base4/base4.component';
import { LightComponent } from './component/light/light.component';
import { StopLightComponent } from './component/stop-light/stop-light.component';
import { WireComponent } from './component/wire/wire.component';
import { CodepadComponent } from './component/codepad/codepad.component';
import { MissionLightComponent } from './component/mission-light/mission-light.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    StartComponent,
    Mission1Component,
    CountdownComponent,
    ButtonComponent,
    CountdownDarkComponent,
    BombComponent,
    KeyPadComponent,
    Base4Component,
    LightComponent,
    StopLightComponent,
    WireComponent,
    CodepadComponent,
    MissionLightComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ButtonModule,
    CheckboxModule,
    DropdownModule,
    InputTextModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}