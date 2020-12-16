import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiqRuDetailsComponent } from './ciq-ru-details.component';

describe('CiqRuDetailsComponent', () => {
  let component: CiqRuDetailsComponent;
  let fixture: ComponentFixture<CiqRuDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiqRuDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CiqRuDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
