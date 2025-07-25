import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatosNovo } from './candidatos-novo';

describe('CandidatosNovo', () => {
  let component: CandidatosNovo;
  let fixture: ComponentFixture<CandidatosNovo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidatosNovo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatosNovo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
