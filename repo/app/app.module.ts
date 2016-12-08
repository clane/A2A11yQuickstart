import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TooltipComponent, AccordionComponent, AlertComponent, ModalDialogComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ TooltipComponent, AccordionComponent, AlertComponent, ModalDialogComponent],
  bootstrap: [ TooltipComponent, AccordionComponent, AlertComponent, ModalDialogComponent]
})
export class AppModule { }
