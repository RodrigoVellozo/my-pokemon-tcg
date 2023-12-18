import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { Pokemons } from '../models/pokemon-model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private readonly URL = 'https://api.pokemontcg.io/v2/cards?pageSize=100';

  constructor(private _http: HttpClient) { }

  //TODO - remover urgente
  public getPokemons = async ()=>{
    const request = await fetch(this.URL);
    return request.json();
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
