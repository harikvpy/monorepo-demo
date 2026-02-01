import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Helper1Component } from './helper1.component';

describe('Helper1Component', () => {
  let component: Helper1Component;
  let fixture: ComponentFixture<Helper1Component>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Helper1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Helper1Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
