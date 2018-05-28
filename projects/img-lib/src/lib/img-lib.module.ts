import { NgModule } from '@angular/core';
import { ImgLibComponent } from './img-lib.component';

import {DialogModule} from 'primeng/dialog';

import { ViewModule } from './view/view.module';
import { ViewComponent } from './view/view/view.component';





@NgModule({
  imports: [DialogModule
  ],
  declarations: [ImgLibComponent],
  exports: [ViewModule],

})
export class ImgLibModule { }
