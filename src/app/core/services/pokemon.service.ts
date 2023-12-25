import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { Pokemons } from '../models/pokemon-model';
import { Query } from '../models/pokemon-query';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private readonly URL = 'https://api.pokemontcg.io/v2/cards';

  constructor(private _http: HttpClient) { }

  public getAllPokemons(query: Query){
    console.log('url >>>', `${this.URL}?page=${query.page}&pageSize=${query.pageSize}`);

    return this._http.get<any>(`${this.URL}?page=${query.page}&pageSize=${query.pageSize}`).pipe(
      map(response => response.data)
    ); 
  }
}
