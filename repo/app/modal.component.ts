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
  selector: "modal-open-button",
  template: `
    <span role="link" tabindex="0" id="modalButton" #modalOpen (click)="open()">Open modal dialog</span>
  `,
  styles:[`
      #modalButton { color:#fff; width:300px; text-decoration:underline; display:inline-block; text-align:center; }  
  `],
  providers: [ModalService]
})
export class ModalOpenButton {
  constructor(private renderer: Renderer, private titleService: Title, private modalDialogService: ModalService) {}
  @ViewChild('modalOpen') openButton: ElementRef;
  @Output() onOpenButtonActivated = new EventEmitter<boolean>();
  open(){
      this.onOpenButtonActivated.emit(true);
      this.modalDialogService.isModal = true;
  }
  focusMe(){
     this.renderer.invokeElementMethod(this.openButton.nativeElement, 'focus');
  }

}

@Component({
  selector: "modal-dialog",
  templateUrl: "./app/templates/modal.html",
  styleUrls: ["./app/templates/css/modal.css"],
  providers: [ModalService]
})
export class ModalDialog  {
  constructor(private renderer: Renderer, private titleService: Title, private modalDialogService: ModalService) {}
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
      this.modalDialogService.isModal = false;
  }
}

@Component({
  selector: "modal-component",
  template: `
      <h2>Modal</h2>
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


