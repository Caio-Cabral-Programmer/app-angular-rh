import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemplos03 } from './exemplos03';

describe('Exemplos03', () => {
  let component: Exemplos03;
  let fixture: ComponentFixture<Exemplos03>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exemplos03]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exemplos03);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
