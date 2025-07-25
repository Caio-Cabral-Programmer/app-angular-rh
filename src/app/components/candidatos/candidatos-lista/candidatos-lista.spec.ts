import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatosLista } from './candidatos-lista';

describe('CandidatosLista', () => {
  let component: CandidatosLista;
  let fixture: ComponentFixture<CandidatosLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidatosLista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatosLista);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
