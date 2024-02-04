import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { DeckState } from './deck.reducer';
import {
  createDeck,
  deleteDeck,
  loadDeckById,
  loadDecks,
  loadMorePokemons,
  loadPokemons,
  resetState,
  updateDeck,
} from './deck.actions';
import { Query } from 'src/app/core/models/pokemon-query';
import * as DeckSelectors from './deck.selectors';
import { Deck } from 'src/app/core/models/deck';

@Injectable({ providedIn: 'root' })
export class DeckFacade {
  public readonly isLoading$ = this._store.select(
    DeckSelectors.selectIsLoading
  );

  public readonly query$ = this._store.select(DeckSelectors.selectDecksQuery);

  public readonly queryPage$ = this._store.select(
    DeckSelectors.selectDecksQueryPage
  );

  public readonly decks$ = this._store.select(DeckSelectors.selectDecks);

  public readonly pokemons$ = this._store.select(DeckSelectors.selectPokemons);

  constructor(private readonly _store: Store<DeckState>) {}

  public loadPokemons(query: Query): void {
    this._store.dispatch(loadPokemons({ query }));
  }

  public loadMorePokemons(query: Query): void {
    this._store.dispatch(loadMorePokemons({ query }));
  }

  public loadDecks(): void {
    this._store.dispatch(loadDecks());
  }

  public loadDeck(id: number): void {
    this._store.dispatch(loadDeckById({ id }));
  }

  public createDeck(deck: Deck): void {
    this._store.dispatch(createDeck({ deck }));
  }

  public updateDeck(deck: Deck): void {
    this._store.dispatch(updateDeck({ deck }));
  }

  public deleteDeck(deck: Deck): void {
    this._store.dispatch(deleteDeck({ deck }));
  }

  public resetState() {
    this._store.dispatch(resetState());
  }
}
