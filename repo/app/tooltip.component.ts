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
    selector: 'aria-tooltip',
    template: `
        <h2>Tooltip</h2>
        <p>Focus the following link to see the tooltip</p>
        <a id="link" (click)="toggle()" (focus)="open()" (blur)="close()" (mouseover)="open()" (mouseout)="close()" href="#" aria-describedby="tooltip" (keyup.escape)="close()">link with tooltip</a>
        <div id="tooltip" role="tooltip" *ngIf="show" [attr.aria-hidden]="ariaHidden">lorem impsum dolar</div>
    `,
    styles: [`
       #tooltip { 
         padding:10px; 
         width:500px; 
         border-radius:10px; 
         background-color:#fff; 
         position:relative; 
         top:-45px; 
         left:330px; 
         color:#000;
      }  
      #link { width:200px; }
    `],
})
export class TooltipComponent implements AfterViewInit {
    constructor(private titleService: Title){}
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

    setTitle( newTitle: string) { this.titleService.setTitle(newTitle); }

    ngAfterViewInit() { this.setTitle('Tooltip'); }


}

