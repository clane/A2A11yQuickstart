
describe('A11y QuickStart E2E Tests',  () => {
    
   
    browser.get('http://localhost:8080');

    beforeEach(function () {
        //Delay before each spec for presentation purposes
        //browser.sleep(5000);
      
        //Slows things down but breaks some tests
       
            var origFn = browser.driver.controlFlow().execute;
            browser.driver.controlFlow().execute = function() {
            var args = arguments;
            //queue 100ms wait
            origFn.call(browser.driver.controlFlow(), function() {
                //return protractor.promise.delayed(100);
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

    //Begin title specs
    let expectedTitle:string;
    let navLink:any;
    //Default route, no activiting any routing links
    expectedTitle = 'Tooltip';
    it('Test of default route (Tooltip) and accordion route', () => {
        browser.get('http://localhost:8080');
        browser.getTitle().then((title) => {
            expect(expectedTitle).toEqual(title);
        }).then( () => {
                expectedTitle = 'Accordion';
                navLink = element(by.css('[routerlink="/accordion"]'));
                navLink.click();
                browser.getTitle().then((title) => {
                    expect(expectedTitle).toEqual(title);
                });

        });
    });

   


});
