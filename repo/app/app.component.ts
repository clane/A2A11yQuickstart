import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: "app-component",
    template: `
        <div *ngIf="notModal">
            <div id="skipLinkContainer">
                <a  
                    id="skipLink" 
                    (focus)="showSkipLink()"
                    (blur)="hideSkipLink()"
                    [ngClass]="{'offscreenText':  skipLinkHidden }"
                    href="#content"
                >
                Skip to Content
                </a>
            </div>
            <h1 *ngIf="notModal">A11y Angular2 Demo</h1>
            <nav *ngIf="notModal">
                <a routerLink="/about"><span>About</span></a>
                <a routerLink="/tooltip"><span>Tooltip</span></a>
                <a routerLink="/accordion"><span>Accordion</span></a>
                <a routerLink="/alert"><span>Alert</span></a>
                <a routerLink="/modal"><span>Modal</span></a>
                <a routerLink="/combobox"><span>Combobox</span></a>
            </nav>
        </div>


        <div id="content" tabindex="-1">
            <router-outlet></router-outlet>
        </div>
  `,
  styles:[`
  
  
 #content{ background-image: url("data:image/svg+xml,%3Csvg width='12' height='16' viewBox='0 0 12 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 .99C4 .445 4.444 0 5 0c.552 0 1 .45 1 .99v4.02C6 5.555 5.556 6 5 6c-.552 0-1-.45-1-.99V.99zm6 8c0-.546.444-.99 1-.99.552 0 1 .45 1 .99v4.02c0 .546-.444.99-1 .99-.552 0-1-.45-1-.99V8.99z' fill='%239C92AC' fill-opacity='0.29' fill-rule='evenodd'/%3E%3C/svg%3E");
 }
  
  
  
  
  `],


})

export class AppComponent {

    constructor(private titleService: Title) {}

    setTitle(newTitle:string) { this.titleService.setTitle(newTitle); }

    getTitle() { 
        let title:string;
        title = this.titleService.getTitle(); 
        return title;
    }

    docTitle:string;
    notModal:boolean = true;
    modalTime:boolean = false;
    skipLinkHidden:boolean = true;
  
    ngAfterContentChecked() {
        //use title to detect modal state
        this.docTitle = this.getTitle();
        if ( this.docTitle == 'MODAL TIME' ) {
            this.notModal = false;
        } else {
            this.notModal = true;
        }
    }

    showSkipLink(){ this.skipLinkHidden = false; }
    hideSkipLink(){ this.skipLinkHidden = true; }
}


