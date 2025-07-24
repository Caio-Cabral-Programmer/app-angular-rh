import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemplos01 } from './exemplos01';

describe('Exemplos01', () => {
  let component: Exemplos01;
  let fixture: ComponentFixture<Exemplos01>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exemplos01]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exemplos01);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
