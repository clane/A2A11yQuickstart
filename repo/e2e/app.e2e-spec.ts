
describe('A11y QuickStart E2E Tests', function () {

    beforeEach(function () {
        browser.get('http://localhost:8080');
    });

    //Begin lang attribute spec 
    let lang:string = 'en';
    it('html tag lang attribute should be: ' + lang, function () {
        expect(element(by.css('html')).getAttribute('lang')).toEqual(lang);
    });
    //End lang attribute spec 

    //Begin title specs
    let expectedTitle:string;
    let title:any;
    expectedTitle = 'Tooltip';
    it('After activating the ' + expectedTitle + ' link the title should be ' + expectedTitle, function () {
        let navLink:any = element(by.css('[routerlink="/tooltip"]'));
        navLink.click();
        let expectedTitle  = browser.getTitle().then(function(title){});
        expect(expectedTitle).toEqual(title);
    });

    expectedTitle = 'Accordion';
    it('After activating the ' + expectedTitle + ' link the title should be ' + expectedTitle, function () {
        let navLink:any = element(by.css('[routerlink="/tooltip"]'));
        navLink.click();
        let expectedTitle  = browser.getTitle().then(function(title){});
        expect(expectedTitle).toEqual(title);
    });

    expectedTitle = 'Alerts';
    it('After activating the ' + expectedTitle + ' link the title should be ' + expectedTitle, function () {
        let navLink:any = element(by.css('[routerlink="/tooltip"]'));
        navLink.click();
        let expectedTitle  = browser.getTitle().then(function(title){});
        expect(expectedTitle).toEqual(title);
    });

    expectedTitle = 'Modal';
    it('After activating the ' + expectedTitle + ' link the title should be ' + expectedTitle, function () {
        let navLink:any = element(by.css('[routerlink="/tooltip"]'));
        navLink.click();
        let expectedTitle  = browser.getTitle().then(function(title){});
        expect(expectedTitle).toEqual(title);
    });

    expectedTitle = 'Combobox`';
    it('After activating the ' + expectedTitle + ' link the title should be ' + expectedTitle, function () {
        let navLink:any = element(by.css('[routerlink="/tooltip"]'));
        navLink.click();
        let expectedTitle  = browser.getTitle().then(function(title){});
        expect(expectedTitle).toEqual(title);
    });

    //End

    //Begin test for <body> as active element
    it('Test for the tag name of the active element to be "BODY" after each browser.get call', function () {
         browser.executeScript('return document.activeElement.tagName').then(function (tagName){
             expect(tagName).toEqual('BODY');
         });
    });
    //End test for <body> as active element


});
