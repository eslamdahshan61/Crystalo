import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fwidth2Component } from './fwidth2.component';

describe('Fwidth2Component', () => {
  let component: Fwidth2Component;
  let fixture: ComponentFixture<Fwidth2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fwidth2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fwidth2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
