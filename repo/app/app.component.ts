import { Component, ViewChild, Renderer. EventEmitter, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'aria-tooltip',
    template: `
        <style>
          #tooltip { padding:10px; width:200px; border-radius:10px; background-color:beige;  position:relative; top:-45px; left:180px; }  
        </style>
        <h2>Tooltip</h2>
        <p>Focus the following link to see the tooltip</p>
        <a id="link" (click)="toggle()" (focus)="open()" (blur)="close()" (mouseover)="open()" (mouseout)="close()" href="#" aria-describedby="tooltip" (keyup.escape)="close()">link with tooltip</a>
        <div id="tooltip" role="tooltip" *ngIf="show" [attr.aria-hidden]="ariaHidden">lorem impsum dolar this is my tooltip</div>
`
})
export class TooltipComponent {

    show: boolean = false;
    ariaHidden: boolean = !this.show;

    open() {
        this.show = true;
        this.ariaHidden = !this.show;
    }

    close() {
        this.show = false;
        this.ariaHidden = !this.show;
    }

    toggle() {
        this.show = !this.show;
        this.ariaHidden = !this.show;
    }
  
}


@Component({
  selector: "aria-accordion",
  template: `
    <style>
      #accordion { width:500px; margin:50px auto; } 
      #accLink { text-decoration:none; display:block; } 
      #insertionPoint { background-color:beige; padding:10px; margin-top:10px; } 
      .icon { color:purple; font-weight:bold; font-size:1.5rem; text-decoration:none; } 
    </style>
    <h2>Accordion</h2>
    <p>Use the following link to toggle the appearance of the accordion's content</p>
    <a id="accLink" href="#" (click)="toggle()" aria-controls="insertionPoint" [attr.aria-expanded]="expanded"><span class="icon">+</span> Accordion Link</a>
    <div id="insertionPoint" *ngIf="show">
        <p>Lorem impsum ...</p>
    </div>
  ` 
})

export class AccordionComponent {

  show: boolean = false;
  expanded: boolean = false;

  toggle() {
    this.show = !this.show;
    this.expanded = !this.expanded;
  }
}

@Component({

  selector: "aria-alert",
  template: `
    <style>
      #alert { width:500px; margin:50px auto; } 
      #alertButton { display:block; } 
      #alertLiveRegion { background-color:beige; padding:10px; margin-top:10px; } 
      .icon { color:purple; font-weight:bold; font-size:1.5rem; text-decoration:none; } 
    </style>
    <h2>Alert</h2>
    <p>Use the following button to dynamically populate the alert's live region</p>
    <button id="alertButton" href="#" (click)="alert()" aria-controls="alertLiveRegion">Trigger an alert</button>
    <div id="alertLiveRegion" role="alert">{{alertText}}</div>
  ` 
})

export class AlertComponent {

  alertText: string = "This is a live region, the alert text will appear here dynamically";

  alert() {
    this.alertText = "Oh no!"
  }

}

@Component({

  selector: "modal-open-button",
  template: `
    <h2 *ngIf="notModal">Modal</h2>
    <button #modalOpen *ngIf="notModal" (click)="enterModalContext()">Open Modal</button>
  ` 
})

export class ModalOpenButton {

}

@Component({

  selector: "just-the-dialog",
  template: `
      <style>
        #lightBox { background-color:#000; width:100%; min-height:2000px; opacity:0.3; } 
        #dialog { background-color:yellow; width:500px; position:fixed; top:40%; left:30%; }
      </style>
      <div id="lightBox"></div>
      <div id="dialog">
        <p class="offscreenText">Beginning of dialog</p>
        <ul>
            <button #modalClose (click)="close()" [disabled]="closeButtonActivated">close</button>
            lorem ipsum...
        </ul>
        <p class="offscreenText">End of dialog</p>
      </div>
  `,
})
export class JustTheDialog implements AfterViewInit {

  @ViewChild('modalClose') focusTarget: ElementRef;
  constructor(private renderer: Renderer) {}
  @Output() onCloseButtonActivated = new EventEmitter<boolean>();

  ngAfterViewInit() {
    this.renderer.invokeElementMethod(this.focusTarget.nativeElement, 'focus');
  }

  close(){
      this.onCloseButtonActivated.emit(true);
  }

}


@Component({

  selector: "widget-demo",
  template: `
      <aria-tooltip *ngIf="notModal">Loading...</aria-tooltip>
      <aria-accordion *ngIf="notModal">Loading...</aria-accordion>
      <aria-alert *ngIf="notModal">Loading...</aria-alert>
      <modal-open-button>Loading...</modal-open-button>
      <just-the-dialog *ngIf="modal" (onCloseButtonActivated)="onCloseButtonActivated($event)">Loading...</just-the-dialog>
  `,
})

export class WidgetDemoComponent {

  public modal:boolean = false;
  public notModal:boolean = true;
  public constructor(private titleService: Title) {}
  constructor(private renderer: Renderer) {}

   @ViewChild('modalOpen') focusTarget: ElementRef;

  public setTitle( newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  ngAfterViewInit() {
    this.setTitle('ARIA Widgets in Angular 2');
  }

  enterModalContext(){
    this.modal = true;
    this.notModal = false; 
  }

  onCloseButtonActivated(){
     this.modal = false;
     this.notModal = true; 
     this.moveFocusBacktoOpenButton();
  }
  moveFocusBacktoOpenButton(){
    
   
    this.renderer.invokeElementMethod(this.focusTarget.nativeElement, 'focus');

  }

}
