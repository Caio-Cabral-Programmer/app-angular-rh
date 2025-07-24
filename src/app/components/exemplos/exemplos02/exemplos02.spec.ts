import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemplos02 } from './exemplos02';

describe('Exemplos02', () => {
  let component: Exemplos02;
  let fixture: ComponentFixture<Exemplos02>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exemplos02]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exemplos02);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
