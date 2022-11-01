import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadcastScheduleMainComponent } from './broadcast-schedule-main.component';

describe('BroadcastScheduleMainComponent', () => {
  let component: BroadcastScheduleMainComponent;
  let fixture: ComponentFixture<BroadcastScheduleMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BroadcastScheduleMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BroadcastScheduleMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
