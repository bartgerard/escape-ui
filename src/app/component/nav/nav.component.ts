import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ButtonModule} from "primeng/primeng";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  start(event) {
    this.router.navigate(['./mission1']);
  }

}
