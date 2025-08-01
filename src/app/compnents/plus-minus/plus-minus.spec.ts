import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusMinus } from './plus-minus';

describe('PlusMinus', () => {
  let component: PlusMinus;
  let fixture: ComponentFixture<PlusMinus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlusMinus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlusMinus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
