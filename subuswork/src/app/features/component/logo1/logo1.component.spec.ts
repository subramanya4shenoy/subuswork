import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Logo1Component } from './logo1.component';

describe('Logo1Component', () => {
  let component: Logo1Component;
  let fixture: ComponentFixture<Logo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Logo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Logo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
