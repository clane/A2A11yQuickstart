
describe('Suite 1',  () => {
    
    browser.ignoreSynchronization = true;//Needed for tests to work, could be due to the interval used in the alert module
    browser.get('http://localhost:8080');

    beforeEach(function () {
        //Slows things down for presentation purposes, all tests pass at 41 milliseconds
        var origFn = browser.driver.controlFlow().execute;
        browser.driver.controlFlow().execute = function() {
            var args = arguments;
            origFn.call(browser.driver.controlFlow(), function() {
                return protractor.promise.delayed(41);//all tests pass at 41 milliseconds
            });
            return origFn.apply(browser.driver.controlFlow(), args);
        };
    });

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

    //Begin testing skip link
    it('Skip link testing ...', () => {
         browser.executeScript('var a = document.getElementById("skipLink"); a.focus();')
         .then( () => {
             expect(element(by.css('#skipLink')).getAttribute('id')).toEqual('skipLink');
         });
    });
    //End testing skip link

    //Begin title spec
    let expectedTitle:string;
    let navLink:any;
   
    //Default route, no activiting any routing links
    expectedTitle = 'Tooltip';
    it('Test of default route', () => {
        browser.getTitle().then((title) => {
            expect(expectedTitle).toEqual(title);
        });
    });



});
