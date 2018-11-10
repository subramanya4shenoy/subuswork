import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDefaultTemplateComponent } from './home-default-template.component';

describe('HomeDefaultTemplateComponent', () => {
  let component: HomeDefaultTemplateComponent;
  let fixture: ComponentFixture<HomeDefaultTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDefaultTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDefaultTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
