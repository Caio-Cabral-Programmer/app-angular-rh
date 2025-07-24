import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../../services/pessoa-service';
import { Pessoa } from '../../../classes/pessoa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exemplos02',
  imports: [CommonModule],
  templateUrl: './exemplos02.html',
  styleUrl: './exemplos02.css'
})
export class Exemplos02 implements OnInit {

  constructor(private service: PessoaService) { }
  ngOnInit(): void {
    this.listar();
  }

  pessoas : Pessoa[] = [];

  listar() : void {
    this.pessoas = this.service.listarPessoas();
  }

  nomePessoa!: string;

  mostrar(nome: string) {
    this.nomePessoa = nome;
  }

}
