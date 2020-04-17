import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modern2Component } from './modern2.component';

describe('Modern2Component', () => {
  let component: Modern2Component;
  let fixture: ComponentFixture<Modern2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modern2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modern2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
