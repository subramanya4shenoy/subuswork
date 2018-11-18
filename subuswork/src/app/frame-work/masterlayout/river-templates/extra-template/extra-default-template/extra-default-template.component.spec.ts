import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraDefaultTemplateComponent } from './extra-default-template.component';

describe('ExtraDefaultTemplateComponent', () => {
  let component: ExtraDefaultTemplateComponent;
  let fixture: ComponentFixture<ExtraDefaultTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraDefaultTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraDefaultTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
