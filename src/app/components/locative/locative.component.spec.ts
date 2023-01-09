import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocativeComponent } from './locative.component';

describe('LocativeComponent', () => {
  let component: LocativeComponent;
  let fixture: ComponentFixture<LocativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocativeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
