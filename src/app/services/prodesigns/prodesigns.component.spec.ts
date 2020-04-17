import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdesignsComponent } from './prodesigns.component';

describe('ProdesignsComponent', () => {
  let component: ProdesignsComponent;
  let fixture: ComponentFixture<ProdesignsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdesignsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdesignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
