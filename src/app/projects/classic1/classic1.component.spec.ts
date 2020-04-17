import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Classic1Component } from './classic1.component';

describe('Classic1Component', () => {
  let component: Classic1Component;
  let fixture: ComponentFixture<Classic1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Classic1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Classic1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
