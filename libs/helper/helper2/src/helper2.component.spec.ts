import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Helper2Component } from './helper2.component';

describe('Helper2Component', () => {
  let component: Helper2Component;
  let fixture: ComponentFixture<Helper2Component>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Helper2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Helper2Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
