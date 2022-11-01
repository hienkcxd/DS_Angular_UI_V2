import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPlayListComponent } from './form-play-list.component';

describe('FormPlayListComponent', () => {
  let component: FormPlayListComponent;
  let fixture: ComponentFixture<FormPlayListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPlayListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPlayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
