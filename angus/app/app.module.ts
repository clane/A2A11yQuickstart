import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, AccordionComponent, AlertComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, AccordionComponent, AlertComponent],
  bootstrap: [ AppComponent, AccordionComponent, AlertComponent ]
})
export class AppModule { }
