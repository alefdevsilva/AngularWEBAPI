import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from './Pessoa';

const httpOptions = {
headers : new HttpHeaders({
  'Content-Type' : 'application/json'
})
}

@Injectable({
  providedIn: 'root'
})
export class PessoasService {
  url = 'https://localhost:7061/api/pessoas'

  constructor(private http: HttpClient) { }

  SelecionarTodos(): Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>(this.url);
  }


  SelecionarPk(Id: number): Observable<Pessoa>{
    const apiUrl = `${this.url}/${Id}`;
    return this.http.get<Pessoa>(apiUrl);
  }

  SalvarPessoa(pessoa: Pessoa):Observable<any>{
    return this.http.post<Pessoa>(this.url, pessoa, httpOptions)
  }

  AtualizarPessoa(pessoa: Pessoa): Observable<any>{
    return this.http.put<Pessoa>(this.url, pessoa, httpOptions)
  }

  ExcluirPessoa(Id: number): Observable<any>{
    const apiUrl = `${this.url}/${Id}`;
    return this.http.delete<number>(apiUrl, httpOptions);
  }
  

}
