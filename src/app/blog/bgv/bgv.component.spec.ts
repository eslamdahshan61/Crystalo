import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BGVComponent } from './bgv.component';

describe('BGVComponent', () => {
  let component: BGVComponent;
  let fixture: ComponentFixture<BGVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BGVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BGVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
