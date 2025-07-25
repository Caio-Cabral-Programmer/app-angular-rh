import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CandidatosLista } from "../candidatos-lista/candidatos-lista";

@Component({
  selector: 'app-candidatos',
  imports: [CandidatosLista],
  templateUrl: './candidatos.html',
  styleUrl: './candidatos.css'
})
export class Candidatos {

  constructor(private router: Router) { }
  

  novoCandidato() : void {
    this.router.navigate(['/candidatos/novo']);

  }

}
