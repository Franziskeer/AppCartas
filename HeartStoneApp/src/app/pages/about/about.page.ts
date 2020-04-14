import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  readonly appName:string = "HearthStoneApp"
  readonly releaseDate:string = "07/04/2020"
  readonly version:string = "v1.0"
  readonly autor:string = "Francisco Piñero Alpañés"
  constructor(private platform: Platform) { 
    this.platform = platform;
  }

  ngOnInit() {
  }

  public exitApp() {
    confirm('Do you want to exit from the app?');
    //this.platform.exitApp()
  }
}
