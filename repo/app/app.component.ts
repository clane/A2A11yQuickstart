import { Component, AfterViewInit, } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: "app-component",
    template: `
        <div *ngIf="notModal">
            <a  
                id="skipLink" 
                (focus)="showSkipLink()"
                (blur)="hideSkipLink()"
                [ngClass]="{'visuallyHidden':  skipLinkHidden }"
                href="#content"
            >
            Skip to Content
            </a>
            <h1 *ngIf="notModal">A11y Angular2 Demo</h1>
            <nav *ngIf="notModal">
                <a routerLink="/about">About</a>
                <a routerLink="/tooltip">Tooltip</a>
                <a routerLink="/accordion">Accordion</a>
                <a routerLink="/alert">Alert</a>
                <a routerLink="/modal">Modal</a>
                <a routerLink="/combobox">Combobox</a>
            </nav>
        </div>

        <div id="content" tabindex="-1">
            <router-outlet></router-outlet>
        </div>
  `,

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
    notModal:boolean;
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


