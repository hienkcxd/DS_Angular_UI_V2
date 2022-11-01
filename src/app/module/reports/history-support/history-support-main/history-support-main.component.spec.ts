import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorySupportMainComponent } from './history-support-main.component';

describe('HistorySupportMainComponent', () => {
  let component: HistorySupportMainComponent;
  let fixture: ComponentFixture<HistorySupportMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorySupportMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorySupportMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
