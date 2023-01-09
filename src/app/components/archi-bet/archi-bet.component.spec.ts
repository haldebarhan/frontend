import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiBetComponent } from './archi-bet.component';

describe('ArchiBetComponent', () => {
  let component: ArchiBetComponent;
  let fixture: ComponentFixture<ArchiBetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiBetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchiBetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
