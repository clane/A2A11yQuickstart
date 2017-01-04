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





@Component({
  selector: "widget-demo",
  template: `
      <div *ngIf="notModal">
        <h1>A11y Angular2 Demo</h1>
        <a routerLink="/tooltip">Tooltip</a>
        <a routerLink="/accordion">Accordion</a>
        <a routerLink="/alert">Alert</a>
        <a routerLink="/modal">Modal</a>
        <a routerLink="/combobox">Combobox</a>
      </div>
      <router-outlet></router-outlet>
  `,
})

export class WidgetDemoComponent {
    constructor(private titleService: Title, private renderer: Renderer ) {}

    setTitle( newTitle: string ) { this.titleService.setTitle(newTitle); }
    getTitle() { 
        let title:string;
        title = this.titleService.getTitle(); 
        return title;
    }

    docTitle:string;
    notModal:boolean;
  
    ngAfterContentChecked() {
        this.docTitle = this.getTitle();

        if ( this.docTitle == 'MODAL TIME' ) {
            this.notModal = false;
        } else {
            this.notModal = true;
        }

    }

    

}


