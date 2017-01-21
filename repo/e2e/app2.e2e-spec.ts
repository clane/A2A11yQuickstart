
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




});
