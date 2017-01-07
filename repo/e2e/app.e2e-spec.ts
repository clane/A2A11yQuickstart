
describe('A11y QuickStart E2E Tests', function () {

    //needed to keep the Jasmine spec from timing out
    browser.ignoreSynchronization = true;
  
    beforeEach(function () {
        browser.get('http://localhost:8080');
    });

    //Verity the lang attribute
    let lang = 'en';
    it('The value of the HTML tags lang attribute should be: ' + lang, function () {
        expect(element(by.css('html')).getAttribute('lang')).toEqual(lang);
    });

    let expectedTitle = 'A2i A11y Quickstart';
    it('The title tag should be: ' + expectedTitle, function () {
    	expect(browser.getTitle()).toEqual(expectedTitle);
    });




});
