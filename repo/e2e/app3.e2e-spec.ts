
describe('Suite 3',  () => {
    
    browser.refresh();
    browser.get('http://localhost:8080');

    let navLink:any;

    it('Test of modal route', () => {
        navLink = element(by.css('[routerlink="/modal"]'));
        navLink.click();
    }, 50000);
   
    it('Test of alert tooltip', () => {
        navLink = element(by.css('[routerlink="/tooltip"]'));
        navLink.click();
    }, 50000);

});
