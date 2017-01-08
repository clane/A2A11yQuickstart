/* tslint:disable:no-unused-variable */
import { TooltipComponent } from './tooltip.component';

import { TestBed }      from '@angular/core/testing';

import { By }           from '@angular/platform-browser';

////////  SPECS  /////////////


describe('TooltipComponent with TCB', function () {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [TooltipComponent]});
  });

 it('should instantiate component', () => {
    let fixture = TestBed.createComponent(TooltipComponent);
    expect(fixture.componentInstance instanceof TooltipComponent).toBe(true, 'should create TooltipComponent');
  });

});
