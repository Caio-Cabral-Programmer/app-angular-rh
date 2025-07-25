import { Component, OnInit } from '@angular/core';
import { Candidato } from '../../../classes/candidato';
import { CandidatosService } from '../../../services/candidatos-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-candidatos-lista',
  imports: [CommonModule],
  templateUrl: './candidatos-lista.html',
  styleUrl: './candidatos-lista.css'
})
export class CandidatosLista implements OnInit {
  
  constructor(private service: CandidatosService) { }

  ngOnInit(): void {
    this.service.getCandidatosApi()
    .subscribe(resposta => this.candidatos = resposta);
  }

  candidatos: Candidato[] = [];


  

}
