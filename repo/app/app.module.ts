import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TooltipComponent } from './tooltip.component';
import { AccordionComponent } from './accordion.component';
import { AlertComponent } from './alert.component';
import { ComboBox } from './combobox.component';
import { ListBoxComponent } from './listbox.component';
import { ModalComponent } from './modal.component';
import { ModalOpenButton } from './modal.component';
import { ModalDialog } from './modal.component';
import { AboutComponent } from './about.component';

@NgModule({
  imports: [ BrowserModule, 
  RouterModule.forRoot([

    {
      //A default path is required to prevent routing errors
      path:'',
      component: AboutComponent,

    },
    {
      path: 'about',
      component: AboutComponent,
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
    { path: '**', 
      component: TooltipComponent,
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
                  AppComponent,
                  AboutComponent],

  bootstrap: [ AppComponent]
})
export class AppModule {}
