import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadcastScheduleFormComponent } from './broadcast-schedule-form.component';

describe('BroadcastScheduleFormComponent', () => {
  let component: BroadcastScheduleFormComponent;
  let fixture: ComponentFixture<BroadcastScheduleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BroadcastScheduleFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BroadcastScheduleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
