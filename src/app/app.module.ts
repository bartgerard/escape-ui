import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {
  ButtonModule,
  CheckboxModule,
  DropdownModule,
  InputTextModule
} from 'primeng/primeng';
import {NavComponent} from './nav/nav.component';
import {FooterComponent} from './footer/footer.component';
import {StartComponent} from './start/start.component';
import {Mission1Component} from './mission1/mission1.component';
import {CountdownComponent} from './countdown/countdown.component';
import {ButtonComponent} from './button/button.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    StartComponent,
    Mission1Component,
    CountdownComponent,
    ButtonComponent
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
