import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacePlanningComponent } from './space-planning.component';

describe('SpacePlanningComponent', () => {
  let component: SpacePlanningComponent;
  let fixture: ComponentFixture<SpacePlanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacePlanningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacePlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
