import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementDynamicLogoComponent } from './element-dynamic-logo.component';

describe('ElementDynamicLogoComponent', () => {
  let component: ElementDynamicLogoComponent;
  let fixture: ComponentFixture<ElementDynamicLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementDynamicLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementDynamicLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
