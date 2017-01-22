
describe('Suite 2',  () => {
    
    let navLink:any;
    let expectedTitle:any;

    it('Tooltip testing ...', () => {
        expectedTitle = 'Tooltip';
        navLink = element(by.css('[routerlink="/tooltip"]'));
        navLink.click();
        browser.getTitle().then((title) => {
            expect(expectedTitle).toEqual(title);
        });
        browser.executeScript('var a = document.getElementById("link"); a.focus();').then();
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
