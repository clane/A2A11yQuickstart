
describe('QuickStart E2E Tests', function () {

  let expectedMsg = 'Angular 2 Tooltip Widget';


  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
    expect(element(by.css('h2')).getText()).toEqual(expectedMsg);
  });

});
