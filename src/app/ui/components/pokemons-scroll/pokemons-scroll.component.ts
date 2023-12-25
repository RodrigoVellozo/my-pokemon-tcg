import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { Query } from 'src/app/core/models/pokemon-query';
import { PokemonService } from 'src/app/core/services/pokemon.service';

@Component({
  selector: 'pokemons-scroll',
  standalone: true,
  imports: [CommonModule, InfiniteScrollModule],
  templateUrl: './pokemons-scroll.component.html',
  styleUrl: './pokemons-scroll.component.scss'
})
export class PokemonsScrollComponent {
  public pokemons: any[] = [];
  
  public isLoading = false;

  public query: Query = {
    page: 1,
    pageSize: 10
  };

  constructor(private _pokemonService: PokemonService){  }

  ngOnInit(): void {
    this.loadData();
  }

  toggleLoading = () => this.isLoading =! this.isLoading;

  loadData(){
    this.toggleLoading();
    this._pokemonService.getAllPokemons(this.query).subscribe({
      next: response => this.pokemons = response,
      complete: () => this.toggleLoading(),
      error: err => console.error('Error: ', err)
    });
  }

  appendData(){
    this.toggleLoading();

    this._pokemonService.getAllPokemons(this.query).subscribe({
      next: response => this.pokemons = [...this.pokemons, ...response],
      complete: () => this.toggleLoading(),
      error: (err) => console.log('err', err)
    })
  }

  onScroll(){
    this.query.page++;
    console.log('aqui no scrooled', this.query.page)
    this.appendData();
  }

}
