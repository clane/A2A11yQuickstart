
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

    //Begin active element
    it('Active element test, should be body ', function () {
        let tag:any = element(by.css('body'));
      
        //browser.executeScript('alert("test");');
      
        
        browser.executeScript('alert(document.activeElement);');
      
        browser.pause();
        
    });
    //End active element


});
