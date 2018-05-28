import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImgLibService {
url:any;
  constructor() { }
  // viewImage(url,height,width){
  //   this.url=url;
  //  return this.url;
  // }
   getImage(){
    return {
      "source": "https://track.zerocodeplatform.com:443/TssTaskTrackerServices/public/employees/Image_35_9002c641-35bc-46a3-84bb-c07ef4aa89f2.jpg",
      "height": 180,
      "width": 150
    };
  }
}
