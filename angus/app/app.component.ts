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
