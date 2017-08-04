import {Component, OnInit, ViewChild} from '@angular/core';
import {BombService} from "../../service/bomb.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-doctor-villan',
  templateUrl: './doctor-villan.component.html',
  styleUrls: ['./doctor-villan.component.css'],
  providers: [
    BombService
  ]
})
export class DoctorVillanComponent implements OnInit {

  @ViewChild('videoPlayer')
  videoPlayer: any;

  constructor(
    private router: Router,
    private bombService: BombService
  ) {
  }

  ngOnInit() {
    this.videoPlayer.nativeElement.play();
  }

  end(): void {
    this.bombService.activate()
    this.router.navigate(['./overview']);
  }

}
