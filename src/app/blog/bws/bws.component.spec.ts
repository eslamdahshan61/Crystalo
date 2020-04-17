import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BWSComponent } from './bws.component';

describe('BWSComponent', () => {
  let component: BWSComponent;
  let fixture: ComponentFixture<BWSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BWSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BWSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
