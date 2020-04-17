import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondesignsComponent } from './condesigns.component';

describe('CondesignsComponent', () => {
  let component: CondesignsComponent;
  let fixture: ComponentFixture<CondesignsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondesignsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondesignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
