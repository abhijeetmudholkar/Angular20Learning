import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketCheck } from './ticket-check';

describe('TicketCheck', () => {
  let component: TicketCheck;
  let fixture: ComponentFixture<TicketCheck>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketCheck]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketCheck);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
