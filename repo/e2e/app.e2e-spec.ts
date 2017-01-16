
describe('A11y QuickStart E2E Tests', function () {

    var lang:string = 'en';
    var expectedTitle:string;
    var title:any;

    beforeEach(function () {
        browser.get('http://localhost:8080');
    });

    it('html tag lang attribute should be: ' + lang, function () {
        expect(element(by.css('html')).getAttribute('lang')).toEqual(lang);
    });

    expectedTitle = 'Tooltip';
    it('After activating the ' + expectedTitle + ' link the title should be ' + expectedTitle, function () {
        let toolTipLink:any = element(by.css('[routerlink="/tooltip"]'));
        toolTipLink.click();
        var expectedTitle  = browser.getTitle().then(function(title){});
        expect(expectedTitle).toEqual(title);

    });

});
