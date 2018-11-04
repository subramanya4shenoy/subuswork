import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoContentComponent } from './logo-content.component';

describe('LogoContentComponent', () => {
  let component: LogoContentComponent;
  let fixture: ComponentFixture<LogoContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
