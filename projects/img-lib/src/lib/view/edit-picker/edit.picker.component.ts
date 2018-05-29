import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Imageproperties } from '../imageproperties';

@Component({
  selector: 'lib-edit',
  templateUrl: './edit.picker.component.html',
  styleUrls: ['./edit.picker.component.css']
})
export class EditComponent implements OnInit {
  @Input() options: Imageproperties;
  @Output() imageEmitter: EventEmitter<any> = new EventEmitter();
  display: boolean = false;
  constructor() {
    this.display = true;
  }

  ngOnInit() {

  }

  closeModel(){
    this.imageEmitter.emit(false);
  }

}
