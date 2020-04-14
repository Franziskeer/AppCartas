import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage { 
  constructor() {}

  exitApp() {
    confirm('Do you want to exit from the app?');
    console.log("Exit app!")
    //this.platform.exitApp()
  }
}
