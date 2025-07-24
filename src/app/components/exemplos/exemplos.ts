import { Component } from '@angular/core';
import { Exemplos01 } from "./exemplos01/exemplos01";
import { Exemplos02 } from "./exemplos02/exemplos02";
import { Exemplos03 } from "./exemplos03/exemplos03";

@Component({
  selector: 'app-exemplos',
  imports: [Exemplos01, Exemplos02, Exemplos03],
  templateUrl: './exemplos.html',
  styleUrl: './exemplos.css'
})
export class Exemplos {

}
