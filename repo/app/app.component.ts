import { Component, ViewChild } from '@angular/core';
import { Title }     from '@angular/platform-browser';

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
  selector: "aria-modal-dialog",
  template: `
    <h2>Modal Dialog</h2>
    <p>Use the following button to show a modal dialog</p>
    <button id="modalButton"(click)="modal()">Open Modal</button>
    <div *ngIf="show">
      <p>Beginning of dialog</p>
      <ul *ngIf="show">
          <li>focus me or my first active child</li>
          <li>constrain focus within</li>
          <li>hide everything else from everyone</li>
      </ul>
      <p>End of dialog</p>
    </div>
  `,
})

export class ModalDialogComponent {

  show: boolean = false;

  modal(){
    this.show = true; 
  }

}


@Component({
  selector: 'my-comp',
  template: `
    <input #myInput type="text" />
    <div> Some other content </div>
  `
})
export class MyComp implements AfterViewInit {
  @ViewChild('myInput') input: ElementRef;

/*
  constructor(private renderer: Renderer) {}

  ngAfterViewInit() {
    this.renderer.invokeElementMethod(this.input.nativeElement,    
    'focus');
  }

*/
}




@Component({
  selector: "widget-demo",
  template: `
  <h1>ARIA Widgets in Angular 2</h1>
      <aria-tooltip>Loading...</aria-tooltip>
      <hr/>
      <aria-accordion>Loading...</aria-accordion>
      <hr/>
      <aria-alert>Loading...</aria-alert>
      <hr/>
      <aria-modal-dialog>Loading...</aria-modal-dialog>
      <hr/>
      <my-comp>Loading...</my-comp>
      <a (click)="setTitle( 'Good evening!' )">Set title to Good evening</a>
  `,
})

export class WidgetDemoComponent {

   public constructor(private titleService: Title ) { }
 
   public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
  
}
