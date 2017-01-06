import { Component, 
         ViewChild, 
         Renderer,
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
    <button id="modalButton" #modalOpen (click)="open()">Open modal dialog</button>
  `,
 
})
export class ModalOpenButton {
  constructor(private renderer: Renderer, private titleService: Title ) {}
  @ViewChild('modalOpen') openButton: ElementRef;
  @Output() onOpenButtonActivated = new EventEmitter<boolean>();
  open(){
      this.onOpenButtonActivated.emit(true);
      this.titleService.setTitle('MODAL TIME');
  }
  focusMe(){
     this.renderer.invokeElementMethod(this.openButton.nativeElement, 'focus');
  }

}

@Component({
  selector: "modal-dialog",
  templateUrl: "./app/templates/modal.html",
  styleUrls: ["./app/templates/css/modal.css"],
})
export class ModalDialog  {
  constructor(private renderer: Renderer, private titleService: Title ) {}
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
      this.titleService.setTitle('Modal');
  }
  doIt(){ 
    alert('you did it');
  }
}

@Component({
  selector: "modal-component",
  template: `
      <h2  *ngIf="notModal">Modal</h2>
      <modal-open-button *ngIf="notModal" (onOpenButtonActivated)="onOpenButtonActivated($event)">Loading...</modal-open-button>
      <modal-dialog *ngIf="!notModal" (onCloseButtonActivated)="onCloseButtonActivated($event)">Loading...</modal-dialog>
  `
})

export class ModalComponent {
  constructor(private titleService: Title, private renderer: Renderer) {}
  @ViewChild(ModalOpenButton)
  private modalButton: ModalOpenButton;
  notModal:boolean = true;

  ngAfterViewInit() { this.setTitle('Modal'); }
  setTitle( newTitle: string) { this.titleService.setTitle(newTitle); }
  enterModalContext(){ this.notModal = false; }
  focusMe() { this.modalButton.focusMe(); }

  onCloseButtonActivated(){
     this.notModal = true;
     setTimeout( ()=>{ this.focusMe(); }, 0);//setTimeout needed for the modalButton to be defined
  }

  onOpenButtonActivated(){ this.notModal = false; }

}


