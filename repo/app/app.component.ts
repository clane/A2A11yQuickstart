import { Component, 
         Input, 
         ViewChild, 
         ViewChildren, 
         Renderer.
         EventEmitter, 
         Output, 
         AfterViewInit,
         Directive } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { State } from './state';
import { StateService } from './state.service';
import { ModalService } from './modal.service';


@Component({
  selector: "widget-demo",
  template: `
      <div  *ngIf="notModal">
        <h1>A11y Angular2 Demo</h1>
        <a routerLink="/tooltip">Tooltip</a>
        <a routerLink="/accordion">Accordion</a>
        <a routerLink="/alert">Alert</a>
        <a routerLink="/modal">Modal</a>
        <a routerLink="/combobox">Combobox</a>
      </div>
      <router-outlet></router-outlet>
  `,
  providers:[ModalService]
})

export class WidgetDemoComponent {
  constructor(private titleService: Title, private renderer: Renderer, private modalDialogService: ModalService) {}

  notModal:boolean = true;

  ngOnInit() {

    this.ngOnInit = !this.modalDialogService.getModalState();

  }

  ngAfterViewInit() { 
    this.setTitle('A11y Widgets using Angular 2');
    console.log('from the demo component, notModal = ' + this.notModal);
  }
  setTitle( newTitle: string) { this.titleService.setTitle(newTitle); }


  

}


