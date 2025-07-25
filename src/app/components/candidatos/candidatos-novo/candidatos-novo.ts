import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CandidatosService } from '../../../services/candidatos-service';
import { FormsModule } from '@angular/forms';
import { Candidato } from '../../../classes/candidato';

@Component({
  selector: 'app-candidatos-novo',
  imports: [FormsModule],
  templateUrl: './candidatos-novo.html',
  styleUrl: './candidatos-novo.css'
})
export class CandidatosNovo {
  
  constructor(
    private service: CandidatosService,
    private router: Router
  ) { }

  candidato : Candidato = new Candidato();

  fechar() : void {
    this.router.navigate(['/candidatos']);
  }

  mostrar() : void {
    window.alert(this.candidato.mostrarCandidato());
  }

  incluir(candidato: Candidato) : void {
    this.service.postCandidatoApi(candidato)
    .subscribe({
      next: () => this.mostrar(),
      complete: () => this.fechar(),
      error: erro => {
        console.log(erro);
        window.alert(erro);
      }
    });
  }


}
