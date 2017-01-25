import { Component, AfterViewInit } from '@angular/core';
import { Title, } from '@angular/platform-browser';

@Component({
    selector: "aria-accordion",
    template: `
        <h2>Accordion</h2>
        <p>Use the following link to toggle the appearance of the accordion's content</p>
        <button 
            id="accLink" 
            href="#" 
            (click)="toggle()" 
            aria-controls="insertionPoint" 
            [attr.aria-expanded]="expanded"
        >
        <span class="icon">+</span> Accordion Button</button>
        <div id="insertionPoint" *ngIf="show">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
  `,
  styles:[`
      #accordion { width:500px; margin:50px auto; } 
      #accLink { text-decoration:none; display:block; width:40%; text-align:left; } 
      #insertionPoint { padding:10px; margin-top:10px; width:80%; } 
      .icon { font-weight:bold; font-size:1.5rem; text-decoration:none; } 
  `],
})

export class AccordionComponent implements AfterViewInit {

    constructor(private titleService: Title){}

    show: boolean = false;
    expanded: boolean = false;

    setTitle( newTitle: string) { this.titleService.setTitle(newTitle); }

    ngAfterViewInit() { this.setTitle('Accordion'); }

    toggle() {
        this.show = !this.show;
        this.expanded = !this.expanded;
    }
  
}



