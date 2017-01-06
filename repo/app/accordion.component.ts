import { Component, AfterViewInit, Directive, } from '@angular/core';
import { Title, } from '@angular/platform-browser';


@Component({
  selector: "aria-accordion",
  template: `
    <h2>Accordion</h2>
    <p>Use the following link to toggle the appearance of the accordion's content</p>
    <button id="accLink" href="#" (click)="toggle()" aria-controls="insertionPoint" [attr.aria-expanded]="expanded"><span class="icon">+</span> Accordion Button</button>
    <div id="insertionPoint" *ngIf="show">
        <p>Lorem impsum ...</p>
    </div>
  `,
  styles:[`
      #accordion { width:500px; margin:50px auto; } 
      #accLink { text-decoration:none; display:block; } 
      #insertionPoint { background-color:#fff; color:#000; padding:10px; margin-top:10px; } 
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



