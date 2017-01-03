import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { WidgetDemoComponent } from './app.component';
import { TooltipComponent } from './tooltip.component';
import { AccordionComponent } from './accordion.component';
import { AlertComponent } from './alert.component';
import { ComboBox } from './combobox.component';
import { ListBoxComponent } from './listbox.component';
import { ModalComponent } from './modal.component';
import { ModalOpenButton } from './modal.component';
import { ModalDialog } from './modal.component';

@NgModule({
  imports: [ BrowserModule, 
  RouterModule.forRoot([

    {
      //A default path is required to prevent routing errors
      path:'',
      component: AlertComponent,

    },
    {
      path: 'tooltip',
      component: TooltipComponent,
    },
    {
      path: 'accordion',
      component: AccordionComponent,
    },
    {
      path: 'alert',
      component: AlertComponent,
    },
    {
      path: 'combobox',
      component: ComboBox,
    },
    {
      path: 'modal',
      component: ModalComponent,
    },
  ]) 
  ],
  declarations: [ TooltipComponent,
                  AccordionComponent, 
                  AlertComponent, 
                  ModalComponent,
                  ModalOpenButton, 
                  ModalDialog, 
                  ComboBox, 
                  ListBoxComponent, 
                  WidgetDemoComponent],

  bootstrap: [ WidgetDemoComponent]
})
export class AppModule {}
