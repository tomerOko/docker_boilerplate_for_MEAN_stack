import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustAComponentComponent } from './just-a-component.component';

describe('JustAComponentComponent', () => {
  let component: JustAComponentComponent;
  let fixture: ComponentFixture<JustAComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JustAComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JustAComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
