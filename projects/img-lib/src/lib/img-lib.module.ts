import { NgModule } from '@angular/core';
import { ImgLibComponent } from './img-lib.component';
import {DialogModule} from 'primeng/dialog';
import { ViewModule } from './view/view.module';


/**
 * This is the main module in img-lib library it contains all the modules and components imported which are used in mg-lib
 * 
 */
@NgModule({
  imports: [DialogModule
  ],
  declarations: [ImgLibComponent],
  exports: [ViewModule],

})
export class ImgLibModule { }
