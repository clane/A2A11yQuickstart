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
import {Observable} from 'rxjs/Observable';



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

      <div *ngFor="let value of values">- {{ value }}</div>

      <div>notModal =  {{notModal}}</div>



  `,
  providers:[ModalService]
})

export class WidgetDemoComponent implements OnInit, AfterViewInit {

  //Finally found a simple Observable example
  //https://angular-2-training-book.rangle.io/handout/observables/using_observables.html

  private data: Observable<Array<boolean>>;
  private values: Array<boolean> = [];

  notModal:boolean;

  constructor(private titleService: Title, private renderer: Renderer, private modalDialogService: ModalService) {}

  ngAfterViewInit() { 
    this.setTitle('A11y Widgets using Angular 2');
  }

  setTitle( newTitle: string) { this.titleService.setTitle(newTitle); }

  ngOnInit() { 
   
    this.data = new Observable(observer => {
          setTimeout(() => {
              observer.next(true);
              console.log('this.notModal = ' + this.notModal);
          }, 2000);

          setTimeout(() => {
              observer.next(false);
              console.log('this.notModal = ' + this.notModal);
          }, 2000);
         
      });

      let subscription = this.data.subscribe(
          value => this.notModal = !value,
          error => this.anyErrors = true,
          () => this.finished = true
      );
    
  }

}


