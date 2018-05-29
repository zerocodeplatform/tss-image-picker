import { Component, OnInit, Input } from '@angular/core';
import { Imageproperties } from '../imageproperties';

/**
 * It contains all the logic needs to view the image.The image properties will receive in @input options variable
 * 
 */
@Component({
  selector: 'lib-view',
  templateUrl: './view.picker.component.html',
  styleUrls: ['./view.picker.component.css']
})
export class ViewComponent implements OnInit {
  @Input() options: Imageproperties ;
  display: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  showDialog(){
    this.display=true;
  }

}
