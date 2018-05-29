import { NgModule } from '@angular/core';
import { ImgLibComponent } from './img-lib.component';
import {DialogModule} from 'primeng/dialog';
import { ViewModule } from './view/view.module';
import {ButtonModule} from 'primeng/button';
import {LightboxModule} from 'primeng/lightbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


/**
 * This is the main module in img-lib library it contains all the modules and components imported which are used in mg-lib
 * 
 */
@NgModule({
  imports: [ButtonModule,LightboxModule,BrowserAnimationsModule,DialogModule
  ],
  declarations: [ImgLibComponent],
  exports: [ViewModule],

})
export class ImgLibModule { }
