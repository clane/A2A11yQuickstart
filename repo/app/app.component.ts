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
        <p>From Whatsock.com ...</p>
        <p> Accordions are a fairly simple control type that are easy to make accessible.</p>
        <p> Though similar in both concept and execution to Tab Controls, they are not the same.</p>
        <p> A Tab Control has a series of grouped triggering elements that expand and collapse, the rendered content 
       of which is inserted directly after the triggering element group when opened.
       The container element insertion point for all Tab Control triggering elements is shared between them.
       Also, the group of triggering elements in a Tab Control has only one tab stop. The arrow keys are then used 
       to switch focus between each Tab, and the <kbd>Enter</kbd> or <kbd>Space</kbd> key is used to expand the desired Tab content panel.</p>
        <p> In contrast, an Accordion has a series of triggering elements that expand and collapse, the rendered content 
       of which is inserted directly after the triggering element when opened.
       The container element insertion points for Accordions are not shared.
       Also, all Accordion links appear in the tab order.
       The reason why ARIA attributes such as <code>role="tablist"</code> and <code>role="tab"</code> are not included within accordions, is 
       because the insertion of inline content would place dynamic content sections within the same Tablist container, 
       making it impossible to determine the order of nested Tab controls when present within the inserted content.</p>
     </div><!-- end insertionPoint -->
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
