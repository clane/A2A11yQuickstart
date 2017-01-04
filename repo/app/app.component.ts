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

export class WidgetDemoComponent implements OnInit, AfterViewInit {
    constructor(private titleService: Title, private renderer: Renderer ) {}

    docTitle:string = 'initialTitle'; 
    notModal:boolean = true;
  

    ngAfterViewInit() { 
        this.titleService.setTitle('titletest');
        console.log(this.docTitle);
        this.docTitle = this.titleService.getTitle();
        console.log(this.docTitle);
    }

}


