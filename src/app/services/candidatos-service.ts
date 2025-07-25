import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidato } from '../classes/candidato';

@Injectable({
  providedIn: 'root'
})
export class CandidatosService {
  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://localhost:8080/candidatos';

  // método (endpoint) para listar candidatos
  public getCandidatosApi() : Observable<Candidato[]> {
    const url = "listar";
    return this.http.get<Candidato[]>(`${this.baseUrl}/${url}`);
  }

  // método para adicionar um novo candidato
  public postCandidatoApi(candidato: Candidato) : Observable<Candidato> {
    const url = `${this.baseUrl}/incluir`;
    return this.http.post<Candidato>(url, candidato);
  }

}
