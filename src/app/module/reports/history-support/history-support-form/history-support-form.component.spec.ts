import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorySupportFormComponent } from './history-support-form.component';

describe('HistorySupportFormComponent', () => {
  let component: HistorySupportFormComponent;
  let fixture: ComponentFixture<HistorySupportFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorySupportFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorySupportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
