
describe('A11y QuickStart E2E Tests', function () {

    //needed to keep the Jasmine spec from timing out
    browser.ignoreSynchronization = true;
  

    //Verity the lang attribute
    let lang = 'en';
    it('The value of the HTML tags lang attribute should be: ' + lang, function () {
        expect(element(by.css('html')).getAttribute('lang')).toEqual(lang);
    });


});
