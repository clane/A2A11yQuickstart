import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TooltipComponent, AccordionComponent, AlertComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ TooltipComponent, AccordionComponent, AlertComponent],
  bootstrap: [ TooltipComponent, AccordionComponent, AlertComponent ]
})
export class AppModule { }
