import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { Pokemons } from '../models/pokemon-model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private readonly URL = 'https://api.pokemontcg.io/v2/cards?pageSize=1000';

  constructor(private _http: HttpClient) { }

  //TODO - remover urgente
  public getPokemons = async ()=>{
    const request = await fetch(this.URL);
    return request.json();
  }

  public getPokemon(search?: string): Observable<Array<any>> {
    if (!search) search = 'one piece';
    return this._http.get<Observable<Array<any>>>(`${this.URL}s=${search}`).pipe(
      map((res:any) => res.Search),
      catchError((err) => {
        console.log('Ocorreu um erro na requisição');
        return throwError(() => err);
      })
    );
  }

  //TODO - fazer funcionar
  public getAllPokemons(){
    return this._http.get<Pokemons>(this.URL).pipe(
      // TODO - remover
      // tap(x=> console.log(`resposta: `,x.data) ),
      map(res => {
        return res.data
      })
    )
  }
}
