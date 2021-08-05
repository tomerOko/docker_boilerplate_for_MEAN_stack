import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HallowComponent } from './hallow.component';

describe('HallowComponent', () => {
  let component: HallowComponent;
  let fixture: ComponentFixture<HallowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HallowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HallowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
