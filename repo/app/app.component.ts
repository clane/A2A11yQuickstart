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
  selector: "modal-open-button",
  template: `
    <span role="link" tabindex="0" id="modalButton" #modalOpen (click)="open()">Modal</span>
  `,
  styles:[`
      #modalButton { color:#fff; width:200px; text-decoration:underline; display:inline-block; text-align:center; }  
  `],
})
export class ModalOpenButton {
  constructor(private renderer: Renderer, private titleService: Title) {}
  @ViewChild('modalOpen') openButton: ElementRef;
  @Output() onOpenButtonActivated = new EventEmitter<boolean>();
  open(){
      this.onOpenButtonActivated.emit(true);
  }
  focusMe(){
     this.renderer.invokeElementMethod(this.openButton.nativeElement, 'focus');
  }

}

@Component({
  selector: "modal-dialog",
  templateUrl: "./app/templates/modal.html",
  styleUrls: ["./app/templates/css/modal.css"]
})
export class ModalDialog  {
  constructor(private renderer: Renderer, private titleService: Title) {}
  @ViewChild('closeButton') closeButton: ElementRef;
  @ViewChild('actionButton') actionButton: ElementRef;
  @Output() onCloseButtonActivated = new EventEmitter<boolean>();
  ngAfterViewInit() {
    this.renderer.invokeElementMethod(this.closeButton.nativeElement, 'focus');
  }
  focusCloseButton() {
     this.renderer.invokeElementMethod(this.closeButton.nativeElement, 'focus');
  }
   focusActionButton() {
     this.renderer.invokeElementMethod(this.actionButton.nativeElement, 'focus');
  }
  close(){
      this.onCloseButtonActivated.emit(true);
  }
}

@Component({
  selector: "widget-demo",
  template: `
      <h1 *ngIf="notModal">A11y Angular2 Demo</h1>
      <!--
      <modal-open-button *ngIf="notModal" (onOpenButtonActivated)="onOpenButtonActivated($event)">Loading...</modal-open-button>
      <modal-dialog *ngIf="!notModal" (onCloseButtonActivated)="onCloseButtonActivated($event)">Loading...</modal-dialog>
      
     
      -->

      <a routerLink="/tooltip">Tooltip</a>
      <a routerLink="/accordion">Accordion</a>
      <a routerLink="/combobox">Combobox</a>
      <a routerLink="/alert">Alert</a>
      <router-outlet></router-outlet>
  `
})

export class WidgetDemoComponent {
  constructor(private titleService: Title, private renderer: Renderer) {}
  @ViewChild(ModalOpenButton)
  private modalButton: ModalOpenButton;
  notModal:boolean = true;

  ngAfterViewInit() { this.setTitle('A11y Widgets using Angular 2'); }
  setTitle( newTitle: string) { this.titleService.setTitle(newTitle); }
  enterModalContext(){ this.notModal = false; }
  focusMe() { this.modalButton.focusMe(); }

  onCloseButtonActivated(){
     this.notModal = true;
     setTimeout( ()=>{ this.focusMe(); }, 0);//setTimeout needed for the modalButton to be defined
  }

  onOpenButtonActivated(){ this.notModal = false; }

}


