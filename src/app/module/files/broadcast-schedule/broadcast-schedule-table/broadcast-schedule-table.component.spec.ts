import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadcastScheduleTableComponent } from './broadcast-schedule-table.component';

describe('BroadcastScheduleTableComponent', () => {
  let component: BroadcastScheduleTableComponent;
  let fixture: ComponentFixture<BroadcastScheduleTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BroadcastScheduleTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BroadcastScheduleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
