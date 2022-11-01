import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryBroadcastTableComponent } from './history-broadcast-table.component';

describe('HistoryBroadcastTableComponent', () => {
  let component: HistoryBroadcastTableComponent;
  let fixture: ComponentFixture<HistoryBroadcastTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryBroadcastTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryBroadcastTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
