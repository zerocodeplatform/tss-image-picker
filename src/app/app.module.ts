import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ImgLibModule } from 'projects/img-lib/src/public_api';

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
    BrowserModule,ImgLibModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
