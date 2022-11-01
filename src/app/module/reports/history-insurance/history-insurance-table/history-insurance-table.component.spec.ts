import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryInsuranceTableComponent } from './history-insurance-table.component';

describe('HistoryInsuranceTableComponent', () => {
  let component: HistoryInsuranceTableComponent;
  let fixture: ComponentFixture<HistoryInsuranceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryInsuranceTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryInsuranceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
