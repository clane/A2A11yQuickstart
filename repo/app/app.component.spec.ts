/* tslint:disable:no-unused-variable */
import { AppComponent } from './app.component';

import { TestBed }      from '@angular/core/testing';

import { By }           from '@angular/platform-browser';

////////  SPECS  /////////////

/// Delete this
describe('Smoke test', () => {
  it('should run a passing test', () => {
    expect(true).toEqual(true, 'should pass');
  });
});

describe('AppComponent with TCB', function () {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [AppComponent]});
  });

  it('should instantiate component', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
  });

  it('should have expected <h2> text', () => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    let h2 = fixture.debugElement.query(el => el.name === 'h2').nativeElement;  // it works

        h2 = fixture.debugElement.query(By.css('h2')).nativeElement;            // preferred

        expect(h2.innerText).toMatch(/Alert/i),
        '<h2> should display the widget');
  });
});
