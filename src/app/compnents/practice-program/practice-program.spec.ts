import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeProgram } from './practice-program';

describe('PracticeProgram', () => {
  let component: PracticeProgram;
  let fixture: ComponentFixture<PracticeProgram>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeProgram]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeProgram);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
