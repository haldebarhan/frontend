import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviArchitecteComponent } from './suivi-architecte.component';

describe('SuiviArchitecteComponent', () => {
  let component: SuiviArchitecteComponent;
  let fixture: ComponentFixture<SuiviArchitecteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiviArchitecteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuiviArchitecteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
