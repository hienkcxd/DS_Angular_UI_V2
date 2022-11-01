import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryInsuranceFormComponent } from './history-insurance-form.component';

describe('HistoryInsuranceFormComponent', () => {
  let component: HistoryInsuranceFormComponent;
  let fixture: ComponentFixture<HistoryInsuranceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryInsuranceFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryInsuranceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
