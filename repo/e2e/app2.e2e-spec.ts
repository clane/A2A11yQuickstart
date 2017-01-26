
describe('Suite 2',  () => {

    let navLink:any;
    let expectedTitle:any;

    it('Tooltip (route, title, focus movement to tooltip link)', () => {

        //Check the router link and title
        expectedTitle = 'Tooltip';
        navLink = element(by.css('[routerlink="/tooltip"]'));
        navLink.click();
        browser.getTitle().then((title) => {
            expect(expectedTitle).toEqual(title);
        });

        //Expose the tooltip by focusing it
        browser.executeScript('document.getElementById("link").focus();');

        //Check the ARIA role
        let expectedRole = 'tooltip';
        let tooltipEl:any = element(by.id('tooltip'));
        expect(tooltipEl.getAttribute('role')).toEqual(expectedRole);

        //Check for the aria-describedby attribute to be set correctly
        let tooltipLink:any = element(by.id('link'));
        expect(tooltipLink.getAttribute('aria-describedby')).toEqual('tooltip');

    });

    it('Accordion testing (route, title, click)', () => {

        //Check the router link and title
        expectedTitle = 'Accordion';
        navLink = element(by.css('[routerlink="/accordion"]'));
        navLink.click();
        browser.getTitle().then((title) => {
            expect(expectedTitle).toEqual(title);
        });

        //Activate the accordion
        let accordionLink:any = element(by.id('accLink'));
        accordionLink.click();

    });

    it('Alert testing (route, title, role="alert")', () => {

        //Check the router link and title
        expectedTitle = 'Alerts';
        navLink = element(by.css('[routerlink="/alert"]'));
        navLink.click();
        browser.getTitle().then((title) => {
            expect(expectedTitle).toEqual(title);
        });
        //Check the ARIA role
        let alertEl:any = element(by.id('alertLiveRegion'));
        let expectedRole = 'alert';
        expect(alertEl.getAttribute('role')).toEqual(expectedRole);
    });

    it('Combobox (route, title, activate button)', () => {

        //Check the router link and title
        expectedTitle = 'Combobox';
        navLink = element(by.css('[routerlink="/combobox"]'));
        navLink.click();
        browser.getTitle().then((title) => {
            expect(expectedTitle).toEqual(title);
        });

        //Send keys to the input
        let input:any = element(by.id('statesInput'));
        input.clear();
        input.sendKeys('c');

        //Activate combobox Button
        let comboboxButton:any = element(by.css('#statesInput + button'))
        comboboxButton.click();
        browser.sleep(5000);
        
    });

    it('Modal testing (route, title, modal button, Visual ARIA)', () => {

        //Check the router link and title
        expectedTitle = 'Modal';
        navLink = element(by.css('[routerlink="/modal"]'));
        navLink.click();
        browser.getTitle().then((title) => {
            expect(expectedTitle).toEqual(title);
        }).then ( () => {

            //Open the modal by activating the modal button
            let modalOpenButton:any = element(by.id('modalButton'));
            modalOpenButton.click();

            //Look for  a Visual ARIA error by checking the dialog for a ridged border coming Visual ARIA
            //let VisualARIAerrorBorder:string  = '5px ridge rgb(255, 0, 0)';//works on OSX Chrome
            let VisualARIAerrorBorder:string  = '3.33333px ridge rgb(255, 0, 0)';//works on Windows 7 Chrome
            browser.executeScript('return getComputedStyle(document.getElementById("dialog")).border;').then((dialogBorder:string) => {
                console.log(dialogBorder);
                if(dialogBorder.match(/ridge/)){
                    browser.executeScript('var el = document.querySelector("#dialog"); var content = window.getComputedStyle(el,":before").content; return content;').then((beforeContent:string) => {
                        console.log(beforeContent);
                        if(beforeContent.match(/ARIA/)){
                            expect(true).toEqual(false);//now fail the spec since there is a Visual ARIA error
                        }
                    });
                } else { console.log('No Visual ARIA errors')}; 
            });
        }); 
    });
});
