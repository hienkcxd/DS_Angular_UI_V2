import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePlayListComponent } from './table-play-list.component';

describe('TablePlayListComponent', () => {
  let component: TablePlayListComponent;
  let fixture: ComponentFixture<TablePlayListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePlayListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablePlayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
