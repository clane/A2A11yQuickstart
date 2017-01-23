import { Component, AfterViewInit, } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'about',
    template: `
        <h2>About</h2>
        <a href="https://github.com/clane/A2A11yQuickstart">Github Repo</a>
    `,
})
export class AboutComponent implements AfterViewInit {

    constructor(private titleService: Title){}
    setTitle( newTitle: string) { this.titleService.setTitle(newTitle); }
    ngAfterViewInit() { this.setTitle('About'); }


}

