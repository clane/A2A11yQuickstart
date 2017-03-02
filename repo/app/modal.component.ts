import { Component, 
         ViewChild, 
         Renderer,
         EventEmitter, 
         Output, 
         AfterViewInit,
         } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: "modal-open-button",
  template: `
    <button id="modalButton" #modalOpen (click)="open()">Open modal dialog</button>
  `,
 
})
export class ModalOpenButton {

    constructor(private renderer: Renderer, private titleService: Title ) {}
    @ViewChild('modalOpen') openButton: any;
    //Wiring to let other components know that the open button has been activated
    @Output() onOpenButtonActivated = new EventEmitter<boolean>();

    open(){
        this.onOpenButtonActivated.emit(true);//let other components know the open button has been activated
        this.titleService.setTitle('MODAL TIME');//overloading setTitle to manage modal state
    }

    focusMe(){
        //Using elementRef is bad. See http://angularjs.blogspot.com/2016/04/5-rookie-mistakes-to-avoid-with-angular.html

        /*
        constructor(el: ElementRef) {
            el.nativeElement.querySelector('input').focus();
        }
        */

        //Safe but experimental
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

    @ViewChild('closeButton') closeButton: any;
    @ViewChild('actionButton') actionButton: any;
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
        this.onCloseButtonActivated.emit(true);//let other components know that the close button has been activated
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

    onOpenButtonActivated(){ this.notModal = false; }//will be modal when false

}


