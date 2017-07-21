import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mission1Component } from './mission1.component';

describe('Mission1Component', () => {
  let component: Mission1Component;
  let fixture: ComponentFixture<Mission1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mission1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mission1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
