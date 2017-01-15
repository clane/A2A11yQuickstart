
describe('A11y QuickStart E2E Tests', function () {
    let lang = 'en';
    it('The value of the HTML tags lang attribute should be: ' + lang, function () {
        expect(element(by.css('html')).getAttribute('lang')).toEqual(lang);
    });
});
