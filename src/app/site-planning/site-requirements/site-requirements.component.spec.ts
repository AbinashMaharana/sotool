import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteRequirementsComponent } from './site-requirements.component';

describe('SiteRequirementsComponent', () => {
  let component: SiteRequirementsComponent;
  let fixture: ComponentFixture<SiteRequirementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteRequirementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
