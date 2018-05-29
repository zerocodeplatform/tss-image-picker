import { Component } from '@angular/core';
import { LoginModule } from 'tsslogin';
import { MenuLibModule } from 'tssmenu-lib';
import { Imageproperties } from 'projects/img-lib/src/lib/view/imageproperties';


/**
 * App component class used for sending the image properties when the project is loaded
 * 
 * 
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  options: Imageproperties;
  constructor() {
    this.options = {
      source: 'https://track.zerocodeplatform.com:443/TssTaskTrackerServices/public/employees/Image_35_9002c641-35bc-46a3-84bb-c07ef4aa89f2.jpg',
      height: 180,
      width: 150
    };
  }
  display: boolean = false;

  showDialog() {
      this.display = true;
  }
}
