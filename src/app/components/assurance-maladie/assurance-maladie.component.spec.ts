import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssuranceMaladieComponent } from './assurance-maladie.component';

describe('AssuranceMaladieComponent', () => {
  let component: AssuranceMaladieComponent;
  let fixture: ComponentFixture<AssuranceMaladieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssuranceMaladieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssuranceMaladieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
