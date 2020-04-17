import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeOversComponent } from './make-overs.component';

describe('MakeOversComponent', () => {
  let component: MakeOversComponent;
  let fixture: ComponentFixture<MakeOversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeOversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeOversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
