import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorySupportTableComponent } from './history-support-table.component';

describe('HistorySupportTableComponent', () => {
  let component: HistorySupportTableComponent;
  let fixture: ComponentFixture<HistorySupportTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorySupportTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorySupportTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
