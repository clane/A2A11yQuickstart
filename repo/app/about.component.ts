import { Component, AfterViewInit, } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'about',
    template: `
        <h2>About</h2>
        <p>This Quickstart for Angular 2 is intended to give an example of Angular 2 basics well as 
        examples of techniques and challenges pertinent to ARIA development.</p>

        <h3>Resources</h3>
        <ul>
            <li>
                <a href="https://github.com/clane/A2A11yQuickstart">Github Repo for A2 A11y Quickstart</a>
            </li>
            <li>
                <a href="http://www.chrislane.info/angular-2-try-not-to-use-native-element-references/">
                http://www.chrislane.info/angular-2-try-not-to-use-native-element-references/
                </a>
            </li>
               
            <li>
                <a href="http://www.chrislane.info/angular-2-beta-17-actually-ships-with-native-key-combination-support/">
                Angular 2 Beta 17 actually ships with native key-combination support.
                </a>
            </li>
             <li>
            </li>
             <li>
            </li>
             <li>
            </li>
             <li>
            </li>
        </ul>
    `,
})
export class AboutComponent implements AfterViewInit {

    constructor(private titleService: Title){}
    setTitle( newTitle: string) { this.titleService.setTitle(newTitle); }
    ngAfterViewInit() { this.setTitle('About'); }


}

