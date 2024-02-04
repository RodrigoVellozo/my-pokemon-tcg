import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IgxToastComponent } from 'igniteui-angular';
import { BehaviorSubject, Observable, map, of, switchMap } from 'rxjs';
import { Deck } from 'src/app/core/models/deck';
import { Data } from 'src/app/core/models/pokemon-data';
import { Query } from 'src/app/core/models/pokemon-query';
import { DeckService } from 'src/app/core/services/deck.service';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import { DeckFacade } from '../+state/deck.facade';

@Component({
  selector: 'app-update-deck',
  templateUrl: './update-deck.component.html',
  styleUrl: './update-deck.component.scss',
})
export class UpdateDeckComponent implements OnInit {
  @ViewChild('toast', { read: IgxToastComponent })
  public toast!: IgxToastComponent;

  public query: Query = {
    page: 1,
    pageSize: 50,
  };

  public page = 1;

  public isLoading$ = this._deckFacade.isLoading$;

  public form = this._initForm();

  public deckId = this._route.snapshot.params['id'];

  public cards: Data[] = [];

  public totalCards: any;

  public choosenCards: { card: Data; amount: number }[] = [];
  public supertypePokemon: { card: Data; amount: number }[] = [];
  public supertypeTrainer: { card: Data; amount: number }[] = [];
  public supertypeEnergy: { card: Data; amount: number }[] = [];

  get name() {
    return this.form.get('name')?.value;
  }

  get imgUrl() {
    return this.form.get('imgUrl')?.value;
  }

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _deckService: DeckService,
    private _pokemonService: PokemonService,
    private _formBuilder: FormBuilder,
    private _deckFacade: DeckFacade
  ) {}

  ngOnInit(): void {
    this._deckFacade.loadPokemons(this.query);

    this._deckFacade.loadDeck(5);

    this.getADeck(this.deckId);
    this._deckFacade.pokemons$.subscribe({
      next: (res) => (this.cards = res),
    });
  }

  public getADeck(deckId: number) {
    this._deckService.getDeckById(deckId).subscribe({
      next: (data: any) => this._patchForm(data),
      error: (error) => console.log('Error:', error),
    });
  }

  private _initForm() {
    return this._formBuilder.group({
      id: [''],
      name: [''],
      imgUrl: [''],
      pokemons: this._formBuilder.array([]),
    });
  }

  private _patchForm(deck: Deck) {
    this.choosenCards = deck.pokemons;
    this.supertypePokemon = deck.pokemons.filter(
      (p) => p.card.supertype === 'Pokémon'
    );
    this.supertypeTrainer = deck.pokemons.filter(
      (p) => p.card.supertype === 'Trainer'
    );
    this.supertypeEnergy = deck.pokemons.filter(
      (p) => p.card.supertype === 'Energy'
    );

    this.form.patchValue({
      id: this.deckId,
      name: deck.name,
      imgUrl: deck.imgUrl,
    });
  }

  public updateDeck() {
    const dataToSend = {
      id: Number(this.deckId),
      name: this.name,
      imgUrl: this.imgUrl,
      pokemons: this.choosenCards,
    } as Deck;

    this._deckFacade.updateDeck(dataToSend);

    this._router.navigateByUrl(`/home`);
  }

  drop(event: CdkDragDrop<{ card: Data; amount: number }[], Data[]>) {
    console.log('event', event)
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

  // scroll infinito
  onScroll() {
    this._deckFacade.loadPokemons({ page: ++this.page, pageSize: 50 });
  }

  public onSearch(name: string): void {
    if (name.length === 0) {
      this._deckFacade.resetState();
      this._deckFacade.loadPokemons({ page: 1, pageSize: 50 });
    } else {
      this._deckFacade.loadMorePokemons({
        q: `name:${name}`,
        page: 1,
        pageSize: 50,
      });
    }
  }
}
