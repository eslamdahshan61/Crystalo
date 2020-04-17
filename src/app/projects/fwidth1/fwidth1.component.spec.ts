import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fwidth1Component } from './fwidth1.component';

describe('Fwidth1Component', () => {
  let component: Fwidth1Component;
  let fixture: ComponentFixture<Fwidth1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fwidth1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fwidth1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
