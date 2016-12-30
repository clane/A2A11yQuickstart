import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';



import { 
  TooltipComponent, 
  AccordionComponent,
  AlertComponent,
  ModalOpenButton,
  ModalDialog, 
  ComboBox, 
  ListBoxComponent, 
  WidgetDemoComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule, 
  RouterModule.forRoot([
    {
      path: 'tooltip',
      component: TooltipComponent,
    }
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
export class AppModule { }
