import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviEntrepreneurComponent } from './suivi-entrepreneur.component';

describe('SuiviEntrepreneurComponent', () => {
  let component: SuiviEntrepreneurComponent;
  let fixture: ComponentFixture<SuiviEntrepreneurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiviEntrepreneurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuiviEntrepreneurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
