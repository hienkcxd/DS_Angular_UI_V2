import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryBroadcastMainComponent } from './history-broadcast-main.component';

describe('HistoryBroadcastMainComponent', () => {
  let component: HistoryBroadcastMainComponent;
  let fixture: ComponentFixture<HistoryBroadcastMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryBroadcastMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryBroadcastMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
