import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IgxToastComponent } from 'igniteui-angular';
import { BehaviorSubject, Observable, map, of, switchMap } from 'rxjs';
import { Data } from 'src/app/core/models/pokemon-data';
import { Query } from 'src/app/core/models/pokemon-query';
import { DeckService } from 'src/app/core/services/deck.service';
import { PokemonService } from 'src/app/core/services/pokemon.service';

const defaultImage = 'https://tcg.pokemon.com/assets/img/tcgl/logos/en-us/logo.png';

@Component({
  selector: 'app-create-deck',
  templateUrl: './create-deck.component.html',
  styleUrl: './create-deck.component.scss',
})
export class CreateDeckComponent {
  public query: Query = {
    page: 1,
    pageSize: 50,
  };

  public isLoading = true;

  public cards!: Data[];

  public pokemons = this._pokemonService
    .getAllPokemons(this.query)
    .subscribe({
      next: (response) => (this.cards = response),
      complete: () => this.toggleLoading(),
      error: (err) => console.error('Error: ', err),
    });

  readonly search$ = new BehaviorSubject<string>('');

  public form = this._initForm();

  public choosenCards: { card: Data; amount: number }[] = [];

  public totalCards: any;

  @ViewChild('toast', { read: IgxToastComponent })
  public toast!: IgxToastComponent;

  // readonly pokemons$ = this.search$.pipe(
  //   switchMap((event) => this.getPokemon(event))
  // );
  // readonly pokemonNotFound$ = this.pokemons$.pipe(
  //   map((pokemons) => (pokemons ? '' : this.search$.value))
  // );

  constructor(
    private _formBuilder: FormBuilder,
    private _deckService: DeckService,
    private _pokemonService: PokemonService,
    private _router: Router
  ) {
  }

  private _initForm(): FormGroup {
    return this._formBuilder.group({
      name: [null],
      imgUrl: [null],
      pokemons: this._formBuilder.array([]),
    });
  }

  toggleLoading = () => (this.isLoading = !this.isLoading);

  public createDeck() {
    const dataToSend = {
      name: this.form.value.name === null ? 'New Deck' : this.form.value.name,
      imgUrl:
        this.form.value.imgUrl === null ? defaultImage : this.form.value.imgUrl,
      pokemons: this.choosenCards,
    };
    this._deckService.postDeck(dataToSend).subscribe();
    this._router.navigateByUrl(`/home`);
  }

  drop(event: CdkDragDrop<{ card: Data; amount: number }[], Data[]>) {
    const item = event.previousContainer.data[event.previousIndex];
    const data = event.container.data;
    const existingCard = data.find((d) => d.card.name === item.name);

    if (existingCard) {
      if (existingCard.amount < 4) {
        existingCard.amount++;
      } else {
        this.toast.open('Você só pode ter quatro unidades da mesma carta.');
      }
      this.choosenCards = [...data];
      return;
    }
    data.unshift({
      card: item,
      amount: 1,
    });

    this.choosenCards = [...data];

    const sum = this.choosenCards.reduce((accumulador, object) => {
      return accumulador + object.amount;
    }, 0);

    this.totalCards = sum;

    if (sum > 60) {
      this.toast.open('Só podem haver 60 cartas em cada deck.');
      return;
    }
  }

  search(search: string) {
    this.search$.next(search);
  }

  private getPokemon(event: string): Observable<Array<any>> {
    // return this._pokemonService.getPokemon(event);
    return of([1, 2, 3]);
  }

  // scroll infinito
  onScroll(){
    this.query.page += 1;
    this.pokemons = this._pokemonService
    .getAllPokemons(this.query)
    .subscribe({
      next: (response) => (this.cards = [...this.cards, ...response]),
      complete: () => this.isLoading = false,
      error: (err) => console.error('Error: ', err),
    });
  }
}
