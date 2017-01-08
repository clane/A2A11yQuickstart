/* tslint:disable:no-unused-variable */
import { TooltipComponent } from './tooltip.component';
import { AccordionComponent } from './accordion.component';
import { AlertComponent } from './alert.component';

import { TestBed }      from '@angular/core/testing';
import { By }           from '@angular/platform-browser';

////////  SPECS  /////////////


describe('Testing widget demo', function () {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [TooltipComponent, AccordionComponent, AlertComponent]});
  });

  it('should instantiate a tooltip component', () => {
    let fixture = TestBed.createComponent(TooltipComponent);
    expect(fixture.componentInstance instanceof TooltipComponent).toBe(true, 'should create TooltipComponent');
  });

  it('should instantiate an accordion component', () => {
    let fixture = TestBed.createComponent(AccordionComponent);
    expect(fixture.componentInstance instanceof AccordionComponent).toBe(true, 'should create AccordionComponent');
  });

  it('should instantiate an alert component', () => {
    let fixture = TestBed.createComponent(AlertComponent);
    expect(fixture.componentInstance instanceof AlertComponent).toBe(true, 'should create AlertComponent');
  });

});
