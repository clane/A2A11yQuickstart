
describe('A11y QuickStart E2E Tests', function () {

    browser.ignoreSynchronization = true;

    let lang = 'en';
  
    beforeEach(function () {
        browser.get('http://localhost:8080');
    });

    it('html tag lang attribute should be: ' + lang, function () {
        expect(element(by.css('html')).getAttribute('lang')).toEqual(lang);
    });

});
