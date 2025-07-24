import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemplos } from './exemplos';

describe('Exemplos', () => {
  let component: Exemplos;
  let fixture: ComponentFixture<Exemplos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exemplos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exemplos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
