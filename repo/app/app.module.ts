import { NgModule }      from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { TooltipComponent, AccordionComponent, AlertComponent, ModalDialogComponent, WidgetDemoComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ TooltipComponent, AccordionComponent, AlertComponent, ModalDialogComponent, WidgetDemoComponent],
  bootstrap: [ WidgetDemoComponent]
})
export class AppModule { }
