import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { 
  ModalOpenButton,
  ModalDialog, 
  WidgetDemoComponent } from './app.component';

import { TooltipComponent } from './tooltip.component';
import { AccordionComponent } from './accordion.component';
import { AlertComponent } from './alert.component';
import { ComboBox } from './combobox.component';
import { ListBoxComponent } from './listbox.component';


@NgModule({
  imports: [ BrowserModule, 
  RouterModule.forRoot([
    {
      path: 'tooltip',
      component: TooltipComponent,
      data: { title: 'Tooltip' }
    },
    {
      path: 'accordion',
      component: AccordionComponent,
      data: { title: 'Accordion' }
    },
    {
      path: 'alert',
      component: AlertComponent,
    },
    {
      path: 'combobox',
      component: ComboBox,
    },
  ]) 
  ],
  declarations: [ TooltipComponent,
                  AccordionComponent, 
                  AlertComponent, 
                  ModalOpenButton, 
                  ModalDialog, 
                  ComboBox, 
                  ListBoxComponent, 
                  WidgetDemoComponent],

  bootstrap: [ WidgetDemoComponent]
})
export class AppModule {}
