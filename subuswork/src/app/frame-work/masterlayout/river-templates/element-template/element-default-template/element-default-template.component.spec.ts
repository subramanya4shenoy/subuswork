import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementDefaultTemplateComponent } from './element-default-template.component';

describe('ElementDefaultTemplateComponent', () => {
  let component: ElementDefaultTemplateComponent;
  let fixture: ComponentFixture<ElementDefaultTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementDefaultTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementDefaultTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
