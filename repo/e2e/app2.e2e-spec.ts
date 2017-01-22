
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
        browser.executeScript('document.getElementById("link").focus();').then();

        //Check the ARIA role
        let tooltipEl:any;
        tooltipEl = element(by.id('tooltip'));
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
