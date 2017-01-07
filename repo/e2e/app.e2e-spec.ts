
describe('A11y QuickStart E2E Tests', function () {

    let expectedMsg = 'A11y Angular2 Demo';
  
    beforeEach(function () {
        browser.get('http://localhost:8080');
    });

    it('should display: ' + expectedMsg, function () {
        expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
    });

});
