import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBigComponent } from './product-big.component';

describe('ProductBigComponent', () => {
  let component: ProductBigComponent;
  let fixture: ComponentFixture<ProductBigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductBigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
