import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, AccordionComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, AccordionComponent ],
  bootstrap: [ AppComponent, AccordionComponent ]
})
export class AppModule { }
