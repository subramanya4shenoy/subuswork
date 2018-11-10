import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialConnectBarComponent } from './social-connect-bar.component';

describe('SocialConnectBarComponent', () => {
  let component: SocialConnectBarComponent;
  let fixture: ComponentFixture<SocialConnectBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialConnectBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialConnectBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
