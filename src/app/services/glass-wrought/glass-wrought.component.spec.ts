import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassWroughtComponent } from './glass-wrought.component';

describe('GlassWroughtComponent', () => {
  let component: GlassWroughtComponent;
  let fixture: ComponentFixture<GlassWroughtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlassWroughtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlassWroughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
