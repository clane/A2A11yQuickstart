
describe('Suite 2',  () => {

    
    let navLink:any;
    let expectedTitle:any;

    it('Tooltip testing ...', () => {
        //Check the router link and title
        expectedTitle = 'Tooltip';
        navLink = element(by.css('[routerlink="/tooltip"]'));
        navLink.click();
        browser.getTitle().then((title) => {
            expect(expectedTitle).toEqual(title);
        });
        browser.executeScript('document.getElementById("link").focus();');

        //Check the ARIA role
        let tooltipEl:any;
        tooltipEl = element(by.id('tooltip'));
        let tooltipLink:any = element(by.id('link'));
        //Check for the
        expect(tooltipLink.getAttribute('aria-describedby')).toEqual('tooltip');
        let expectedRole = 'tooltip';
        expect(tooltipEl.getAttribute('role')).toEqual(expectedRole);
    });

    it('Accordion testing ...', () => {
        expectedTitle = 'Accordion';
        navLink = element(by.css('[routerlink="/accordion"]'));
        navLink.click();
        browser.getTitle().then((title) => {
            expect(expectedTitle).toEqual(title);
        });
        let accordionLink:any = element(by.id('accLink'));
        accordionLink.click();
        
    });

    it('Alert testing ...', () => {
        expectedTitle = 'Alerts';
        navLink = element(by.css('[routerlink="/alert"]'));
        navLink.click();
        browser.getTitle().then((title) => {
            expect(expectedTitle).toEqual(title);
        });
    });


    it('Modal testing...', () => {
        expectedTitle = 'Modal';
        navLink = element(by.css('[routerlink="/modal"]'));
        navLink.click();
        browser.getTitle().then((title) => {
            expect(expectedTitle).toEqual(title);
        }).then ( () => {
            let modalOpenButton:any = element(by.id('modalButton'));
            let VisualARIAerrorBorder:string  = '5px ridge rgb(255, 0, 0)';
            modalOpenButton.click();
            browser.executeScript('return getComputedStyle(document.getElementById("dialog")).border;').then(function(dialogBorder){
                if(VisualARIAerrorBorder === dialogBorder){
                    console.log("There is a Visual ARIA error in the modal");
                    browser.executeScript('return getComputedStyle(document.getElementById("dialog")).border;').then(function(dialogBorder){
                    });
                }
            });

            browser.executeScript('var el = document.querySelector("#dialog"); var content = window.getComputedStyle(el,":before").content; return content;').then(function(VAerror){
                console.log(VAerror);
                expect(true).toEqual(false);//now fail the spec since there is a Visual ARIA error
            });
        }); 
    });

    it('Combobox testing ...', () => {
        expectedTitle = 'Combobox';
        navLink = element(by.css('[routerlink="/combobox"]'));
        navLink.click();
        browser.getTitle().then((title) => {
            expect(expectedTitle).toEqual(title);
        });

    });



   
});
