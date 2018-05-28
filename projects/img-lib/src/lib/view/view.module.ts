import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  imports: [
    CommonModule,DialogModule
  ],
  declarations: [ViewComponent],
  exports: [ViewComponent],
})
export class ViewModule { }
