import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modern1Component } from './modern1.component';

describe('Modern1Component', () => {
  let component: Modern1Component;
  let fixture: ComponentFixture<Modern1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modern1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modern1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
