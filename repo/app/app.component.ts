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

@Component({
  selector: "widget-demo",
  template: `
      <div *ngIf="notModal">
        <a id="skipLink" href="#content">Skip to Content</a>
        <h1>A11y Angular2 Demo</h1>
        <nav *ngIf="notModal">
            <a routerLink="/tooltip">Tooltip</a>
            <a routerLink="/accordion">Accordion</a>
            <a routerLink="/alert">Alert</a>
            <a routerLink="/modal">Modal</a>
            <a routerLink="/combobox">Combobox</a>
        </nav>
      </div>

      <div id="content" tabindex="-1">
        <router-outlet></router-outlet>
      </div>
  `,

})

export class WidgetDemoComponent {
    constructor(private titleService: Title, private renderer: Renderer) {}

    setTitle(newTitle: FunctionStringCallback) { this.titleService.setTitle(newTitle); }
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


