
describe('Suite 2',  () => {
    
    browser.refresh();
    browser.get('http://localhost:8080');

    let navLink:any;

    it('Test of tooltip route', () => {
        navLink = element(by.css('[routerlink="/accordion"]'));
        navLink.click();
    });
   
    it('Test of alert route', () => {
        navLink = element(by.css('[routerlink="/alert"]'));
        navLink.click();
    });

    it('Test of modal route', () => {
        navLink = element(by.css('[routerlink="/modal"]'));
        navLink.click();
    });

      it('Test of tooltip route', () => {
        navLink = element(by.css('[routerlink="/accordion"]'));
        navLink.click();
    });
   
    it('Test of alert route', () => {
        navLink = element(by.css('[routerlink="/alert"]'));
        navLink.click();
    });

    it('Test of modal route', () => {
        navLink = element(by.css('[routerlink="/modal"]'));
        navLink.click();
    });


  it('Test of tooltip route', () => {
        navLink = element(by.css('[routerlink="/accordion"]'));
        navLink.click();
    });
   
    it('Test of alert route', () => {
        navLink = element(by.css('[routerlink="/alert"]'));
        navLink.click();
    });

    it('Test of modal route', () => {
        navLink = element(by.css('[routerlink="/modal"]'));
        navLink.click();
    });

    let expectedTitle:any;

    expectedTitle = 'Tooltip';
    
    it('Test of accordion route', () => {
        expectedTitle = 'Accordion';
        navLink = element(by.css('[routerlink="/accordion"]'));
        navLink.click();
        browser.getTitle().then((title) => {
            expect(expectedTitle).toEqual(title);
        });
    });

     it('Test of accordion route', () => {
        expectedTitle = 'Accordion';
        navLink = element(by.css('[routerlink="/accordion"]'));
        navLink.click();
        browser.getTitle().then((title) => {
            expect(expectedTitle).toEqual(title);
        });
    });


    it('Test of accordion route and title', () => {
        expectedTitle = 'Accordion';
        navLink = element(by.css('[routerlink="/accordion"]'));
        navLink.click();
        browser.getTitle().then((title) => {
            expect(expectedTitle).toEqual(title);
        });
    });

     it('Test of tooltip route and title', () => {
        expectedTitle = 'Tooltip';
        navLink = element(by.css('[routerlink="/tooltip"]'));
        navLink.click();
        browser.getTitle().then((title) => {
            expect(expectedTitle).toEqual(title);
        });
    });


     it('Test of modal route and title', () => {
        expectedTitle = 'Modal';
        navLink = element(by.css('[routerlink="/modal"]'));
        navLink.click();
        browser.getTitle().then((title) => {
            expect(expectedTitle).toEqual(title);
        });
    });

    it('Test of alert route and title', () => {
        expectedTitle = 'Alerts';
        navLink = element(by.css('[routerlink="/alert"]'));
        navLink.click();
        browser.getTitle().then((title) => {
            expect(expectedTitle).toEqual(title);
        });
    });

    it('Test of combobox route and title', () => {
        expectedTitle = 'Combobox';
        navLink = element(by.css('[routerlink="/combobox"]'));
        navLink.click();
        browser.getTitle().then((title) => {
            expect(expectedTitle).toEqual(title);
        });
    });











});
