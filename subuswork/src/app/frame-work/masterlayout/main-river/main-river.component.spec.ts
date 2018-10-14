import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRiverComponent } from './main-river.component';

describe('MainRiverComponent', () => {
  let component: MainRiverComponent;
  let fixture: ComponentFixture<MainRiverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainRiverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
