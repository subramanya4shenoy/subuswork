import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoDefaultTemplateComponent } from './logo-default-template.component';

describe('LogoDefaultTemplateComponent', () => {
  let component: LogoDefaultTemplateComponent;
  let fixture: ComponentFixture<LogoDefaultTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoDefaultTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoDefaultTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
