import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LoginModule} from 'tsslogin';
import {MenuLibModule} from 'tssmenu-lib';
import {ImgLibModule } from 'projects/img-lib/src/public_api';
import {LightboxModule} from 'primeng/lightbox';
import {DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
/**
 * This is the main module of the project and is executed first.
 * It contains all the important modules imported
 * 
 */
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,LoginModule,MenuLibModule,ImgLibModule,DialogModule,BrowserAnimationsModule,ButtonModule
  ],
  // providers: [ImgLibService],
  bootstrap: [AppComponent]
})

export class AppModule { }
