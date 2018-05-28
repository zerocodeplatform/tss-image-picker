import { Component } from '@angular/core';
import { LoginModule } from 'tsslogin';
import { ImgLibModule, ImgLibService } from 'projects/img-lib/src/public_api';
import { MenuLibModule } from 'tssmenu-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  options: any;
  constructor(private menu: MenuLibModule, private img: ImgLibService) {
    this.options = {
      "source": "https://track.zerocodeplatform.com:443/TssTaskTrackerServices/public/employees/Image_35_9002c641-35bc-46a3-84bb-c07ef4aa89f2.jpg",
      "height": 180,
      "width": 150
    };
  }
  display: boolean = false;

  showDialog() {
      this.display = true;
  }
}
