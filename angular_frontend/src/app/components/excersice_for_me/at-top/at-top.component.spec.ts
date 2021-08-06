import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtTopComponent } from './at-top.component';

describe('AtTopComponent', () => {
  let component: AtTopComponent;
  let fixture: ComponentFixture<AtTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
