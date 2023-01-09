import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproDistComponent } from './appro-dist.component';

describe('ApproDistComponent', () => {
  let component: ApproDistComponent;
  let fixture: ComponentFixture<ApproDistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproDistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproDistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
