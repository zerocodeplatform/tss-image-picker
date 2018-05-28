import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  @Input() options: any ;
  display: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  showDialog(){
    this.display=true;
  }

}
