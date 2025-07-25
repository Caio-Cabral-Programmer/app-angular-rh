import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../../services/pessoa-service';
import { Pessoa } from '../../../classes/pessoa';
import { CommonModule } from '@angular/common';
import { TamanhoPipe } from '../../../pipes/tamanho-pipe';
import { FiltroPipe } from "../../../pipes/filtro-pipe";

@Component({
  selector: 'app-exemplos03',
  imports: [CommonModule, TamanhoPipe, FiltroPipe],
  templateUrl: './exemplos03.html',
  styleUrl: './exemplos03.css'
})
export class Exemplos03 implements OnInit{


  constructor(private service: PessoaService) { }

  ngOnInit(): void {
    this.listar();
  }

  pessoas: Pessoa[] = [];

  listar(): void {
    this.pessoas = this.service.listarPessoas();
  }

}
