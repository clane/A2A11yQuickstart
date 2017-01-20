
describe('A11y QuickStart E2E Tests',  () => {
    
   
    browser.get('http://localhost:8080');

    beforeEach(function () {
        //Delay before each spec for presentation purposes
        browser.sleep(5000);
      
        //Slows things down but breaks some tests
        /*
            var origFn = browser.driver.controlFlow().execute;
            browser.driver.controlFlow().execute = function() {
            var args = arguments;
            //queue 100ms wait
            origFn.call(browser.driver.controlFlow(), function() {
                return protractor.promise.delayed(100);
            });
                return origFn.apply(browser.driver.controlFlow(), args);
            };
        */

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
    //Default route, no activiting any routing links
    expectedTitle = 'Tooltip';
    it('After the main components loads the expected title should be ' + expectedTitle, () => {
        browser.get('http://localhost:8080');
        browser.getTitle().then((title) => {
            expect(expectedTitle).toEqual(title);
        });
     });

    //End title specs

    //Begin spec for modal focus movement
    it('Focus should go to the modal close button when the modal is opened', () => {
        let modalLink:any = element(by.css('[routerlink="/modal"]'));
        modalLink.click(); 
        let focusTargetId:string = "closeButton";
        let modalButton:any = element(by.id('modalButton'));
        modalButton.click();
        browser.executeScript('return document.activeElement.id;').then( (id) => {
            expect(id).toEqual(focusTargetId);
        });
    });



});
