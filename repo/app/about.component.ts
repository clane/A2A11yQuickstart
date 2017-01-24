import { Component, AfterViewInit, } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'about',
    template: `
        <h2>About</h2>
        <p>This Quickstart for Angular 2 is intended to give an example of Angular 2 basics well as 
        examples of techniques and challenges pertinent to accessible web development such as:</p>
        <ol>
            <li>Keyboard Accessibility</li>
            <li>Focus Management</li>
            <li>ARIA</li>
        </ol>
        
        <p> It also demonstrates end-to-end testing with 
        <a href="http://www.protractortest.org/#/">Protractor</a> and 
        <a href="http://whatsock.com/training/matrices/visual-aria.htm">Visual ARIA</a>.</p>
        <p>To see these tests in action
        download or clone 
        <a href="https://github.com/clane/A2A11yQuickstart">A2 A11y Quickstart</a>
        </p>

        <h3>Resources</h3>
        <ul>
            <li>
                <a href="https://github.com/clane/A2A11yQuickstart">Github Repo for A2 A11y Quickstart</a>
            </li>
            <li>
                <a href="http://www.chrislane.info/angular-2-try-not-to-use-native-element-references/">
                Don't use native element references in Angular 2
                </a>
            </li>
               
            <li>
                <a href="http://www.chrislane.info/angular-2-beta-17-actually-ships-with-native-key-combination-support/">
                Angular 2 native key-combination support
                </a>
            </li>
            <li>
                <a href="http://www.chrislane.info/protractor-debugging/">Protractor Debugging</a>
             <li>
        </ul>
    `,
})
export class AboutComponent implements AfterViewInit {

    constructor(private titleService: Title){}
    setTitle( newTitle: string) { this.titleService.setTitle(newTitle); }
    ngAfterViewInit() { this.setTitle('About'); }


}

