import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos01',
  imports: [],
  templateUrl: './exemplos01.html',
  styleUrl: './exemplos01.css'
})
export class Exemplos01 implements OnInit {
  ngOnInit(): void {
    this.gerarNumero();
  }

  rnd!: number | undefined;

  gerarNumero() : void {
    this.rnd = Math.random();

  }

}
