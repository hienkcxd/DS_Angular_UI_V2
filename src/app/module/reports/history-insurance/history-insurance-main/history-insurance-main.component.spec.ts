import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryInsuranceMainComponent } from './history-insurance-main.component';

describe('HistoryInsuranceMainComponent', () => {
  let component: HistoryInsuranceMainComponent;
  let fixture: ComponentFixture<HistoryInsuranceMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryInsuranceMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryInsuranceMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
