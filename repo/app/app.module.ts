import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { 
  TooltipComponent, 
  AccordionComponent,
  AlertComponent,
  ModalOpenButton,
  ModalDialog, 
  ComboBox, 
  ListBoxComponent, 
  WidgetDemoComponent } from './app.component';

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
      data: { title: 'Accordion' }
    },
    {
      path: 'combobox',
      component: ComboBox,
      data: { title: 'ComboBox' }
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
