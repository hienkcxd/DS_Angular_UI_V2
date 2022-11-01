import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPlayListComponent } from './main-play-list.component';

describe('MainPlayListComponent', () => {
  let component: MainPlayListComponent;
  let fixture: ComponentFixture<MainPlayListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPlayListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPlayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
