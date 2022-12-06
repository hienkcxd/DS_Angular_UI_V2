import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogginLayoutComponent } from './loggin-layout.component';

describe('LogginLayoutComponent', () => {
  let component: LogginLayoutComponent;
  let fixture: ComponentFixture<LogginLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogginLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogginLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
