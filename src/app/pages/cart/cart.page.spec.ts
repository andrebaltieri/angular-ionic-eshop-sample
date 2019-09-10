import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPage } from './cart.page';

describe('CartPage', () => {
  let component: CartPage;
  let fixture: ComponentFixture<CartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
