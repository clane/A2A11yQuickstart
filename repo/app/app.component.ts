import { Component } from '@angular/core';

@Component({
    selector: 'aria-tooltip',
    template: `
        <style>
          #tooltip { padding:10px; width:200px; border-radius:10px; background-color:beige;  position:relative; top:-45px; left:180px; }  
     </style>
      
        <h2>Tooltip Widget</h2>
        <a id="link" (click)="toggle()" (focus)="open()" (blur)="close()" (mouseover)="open()" (mouseout)="close()" href="#" aria-describedby="tooltip" (keyup.escape)="close()">Go somewhere -&gt;</a>
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
      #insertionPoint { background-color:beige; padding:10px; margin-top:10px; } 
      .icon { color:purple; font-weight:bold; font-size:1.5rem; text-decoration:none; } 
    </style>
    <h2>Alert</h2>

      <button id="alertButton" href="#" (click)="toggle()" aria-controls="insertionPoint">Trigger an alert</button>
      <div id="insertionPoint" role="alert">{{text}}</div>
  ` 
})

export class AlertComponent {

  text: string = "";

  toggle() {
    this.text = "Oh no!"
  }

}

@Component({
  selector: "aria-modal-dialog",
  template: `
    <h2>Modal Dialog</h2>
    <button id="modalButton"(click)="focusDialog()">Open Modal</button>
    <div>
        <p>Beginning of dialog</p>
        <p>End of dialog</p>
    </div>
  `,
})

export class ModalDialogComponent {

  show: boolean = false;

  focusDialog(){}

}
