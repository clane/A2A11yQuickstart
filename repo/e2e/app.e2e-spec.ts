
describe('A11y QuickStart E2E Tests',  () => {
    
    browser.get('http://localhost:8080');

    //Begin spec for <body> as active element
    it('Test for the tag name of the active element to be "BODY" after the page loads', () => {
         browser.executeScript('return document.activeElement.tagName').then( (tagName) => {
             expect(tagName).toEqual('BODY');
         });
    });
    //End  spec for <body> as active element

    //Begin lang attribute spec 
    let lang:string = 'en';
    it('html tag lang attribute should be: ' + lang, () => {
        expect(element(by.css('html')).getAttribute('lang')).toEqual(lang);
    });
    //End lang attribute spec 

    //Begin title specs
    let expectedTitle:string;
    //Default route, no activiting any routing links
    expectedTitle = 'Tooltip';
    it('After the main components loads the expected title should be ' + expectedTitle, () => {
        browser.getTitle().then((title) => {
            expect(expectedTitle).toEqual(title);
        });
    });

    //End title specs

 

});
