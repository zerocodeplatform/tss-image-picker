import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DialogModule} from 'primeng/dialog';
import { EditComponent } from './edit-picker/edit.picker.component';
import { ViewComponent } from './view-picker/view.picker.component';


/**
 * This module contains two components view-picker and edit-picker which are exported in this module
 * 
 */
@NgModule({
  imports: [
    CommonModule,DialogModule
  ],
  declarations: [ViewComponent, EditComponent],
  exports: [ViewComponent],
})
export class ViewModule { }
