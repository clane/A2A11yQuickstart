import { Component } from '@angular/core';

@Component({
    selector: 'my-tooltip-component',
    template: `

<h1>Angular 2 a11y Widgets</h1>

 <style>
          #content { width:600px; margin:50px auto; min-height:600px;  } 
          #tooltipWidget  { width:500px; margin:40px auto 10px; min-height:90px;  } 
          #link { display:block; margin:20px 10px 0 0; width:200px; text-decoration:underline; font-size:1.5rem; }
          #tooltip { padding:10px; width:200px; border-radius:10px; background-color:beige;  position:relative; top:-45px; left:180px; }  
     </style>
      
      <div id="content">
          <h2>Angular 2 Tooltip Widget</h2>
          <div id="tooltipWidget">
              <a id="link" (click)="toggle()" (focus)="open()" (blur)="close()" (mouseover)="open()" (mouseout)="close()" href="#" aria-describedby="tooltip" (keyup.escape)="close()">Go somewhere -&gt;</a>
              <div id="tooltip" role="tooltip" *ngIf="show" [attr.aria-hidden]="ariaHidden">lorem impsum dolar this is my tooltip</div>

          </div>

          <h3>Description</h3>
          <p>From <a href="https://www.w3.org/TR/wai-aria-practices/#tooltip">https://www.w3.org/TR/wai-aria-practices/#tooltip</a></p>
          <p>Popup that displays a description for an element when a user hovers over or focuses on that element. It should popup automatically when the user gives input focus to the widget or element with which it is associated. The tooltip widget can be dismissed by pressing the Escape key or by other methods noted below. The tooltip widget differs from the Dialog (Tooltip) in that it does not receive focus at any time.
The tooltip may appear immediately or there may be a small delay before the tooltip appears.</p>

          <h3>Keyboard Interaction</h3>
          <p>Escape: Dismisses the Tooltip.</p>
<p>
NOTE
The trigger element to which the tooltip is attached, e.g., a link, should never actually lose input focus.
If the tooltip is invoked when the trigger element gets focus, then it should be dismissed when it no longer has focus (onBlur). If the tooltip is invoked with mouseIn, then it should be dismissed with a mouseOut.
If nested widgets use the same keys, e.g., Escape, then they should be handled in a Last In First Out (LIFO) manner. For example, an editable grid contains gridcells which contain date fields. The user invokes Actionable mode on the grid and then interacts with the Date Field to invoke the Date Picker. At this point the first press of the Escape key will close the Date Picker, the second press will exit Actionable mode and return to Navigation mode.
<p>

      </div>

`
})
export class AppComponent {

    show: bool = false;
    ariaHidden: bool = !this.show;

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
  selector: "my-accordion",
  template: `
    <style>
      #accordion { width:500px; margin:50px auto; } 
      #accLink { text-decoration:none; display:block; } 
      #insertionPoint { background-color:beige; padding:10px; margin-top:10px; } 
      .icon { color:purple; font-weight:bold; font-size:1.5rem; text-decoration:none; } 
    </style>
    <div id="accordion">
      <h2>Angular 2 Accordion</h2>
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
     </div>
  ` 
})

export class AccordionComponent {

  show: bool = false;
  expanded: bool = false;

  toggle() {
    this.show = !this.show;
    this.expanded = !this.expanded;
  }
 
}


@Component({
  selector: "my-alert",
  template: `
    <style>
      #alert { width:500px; margin:50px auto; } 
      #alertButton { text-decoration:none; display:block; } 
      #insertionPoint { background-color:beige; padding:10px; margin-top:10px; } 
      .icon { color:purple; font-weight:bold; font-size:1.5rem; text-decoration:none; } 
    </style>
    <div id="alert">
      <h1>Angular 2 Alert</h1>

      <p>
From https://www.w3.org/TR/wai-aria-1.1/ ...
</p>

     <h2> alert (role)§</h2>
<p>
A type of live region with important, and usually time-sensitive, information. See related alertdialog and status.

Alerts are used to convey messages to alert the user. In the case of audio warnings this is an accessible alternative for a hearing-impaired user. The alert role goes on the node containing the alert message. Alerts are specialized forms of the status role, which will be processed as an atomic live region.

Alerts are assertive live regions and will be processed as such by assistive technologies. Neither authors nor user agents are required to set or manage focus to them in order for them to be processed. Since alerts are not required to receive focus, content authors should not require users to close an alert. If the operating system allows, the user agent should fire a system alert event through the accessibility API when the WAI-ARIA alert is created. If an alert requires focus to close the alert, then content authors should use alertdialog instead.

Elements with the role alert have an implicit aria-live value of assertive, and an implicit aria-atomic value of true.

</p>
      <button id="alertButton" href="#" (click)="toggle()" aria-controls="insertionPoint">Trigger an alert</button>
      <div id="insertionPoint" *ngIf="show" role="alert">Don't forget to save your work!</div>
  ` 
})

export class AlertComponent {

  show: bool = false;

  toggle() {
    this.show = !this.show;
  }
 
}

