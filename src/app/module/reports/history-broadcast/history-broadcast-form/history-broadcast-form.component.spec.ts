import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryBroadcastFormComponent } from './history-broadcast-form.component';

describe('HistoryBroadcastFormComponent', () => {
  let component: HistoryBroadcastFormComponent;
  let fixture: ComponentFixture<HistoryBroadcastFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryBroadcastFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryBroadcastFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
