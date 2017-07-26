import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-mission1',
  templateUrl: './mission1.component.html',
  styleUrls: ['./mission1.component.css']
})
export class Mission1Component implements OnInit {

  @ViewChild('videoPlayer')
  videoPlayer: any;

  constructor() {
  }

  ngOnInit() {
    this.videoPlayer.nativeElement.play();
  }

}
