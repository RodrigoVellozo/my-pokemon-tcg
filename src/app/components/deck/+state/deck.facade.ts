import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { DeckState } from './deck.reducer';
import { deleteDeck, loadDecks, loadPokemons } from './deck.actions';
import { Query } from 'src/app/core/models/pokemon-query';
import * as DeckSelectors from './deck.selectors';
import { Deck } from 'src/app/core/models/deck';

@Injectable({ providedIn: 'root' })
export class DeckFacade {
  public isLoading$ = this._store.select(DeckSelectors.selectIsLoading);

  public readonly query$ = this._store.select(DeckSelectors.selectDecksQuery);

  public readonly decks$ = this._store.select(DeckSelectors.selectDecks);

  constructor(private readonly _store: Store<DeckState>) {}

  public loadPokemons(query: Query): void {
    this._store.dispatch(loadPokemons({ query }));
  }

  public loadDecks(): void {
    this._store.dispatch(loadDecks());
  }

  public deleteDeck(deck: Deck): void {
    this._store.dispatch(deleteDeck({deck}))
  }
}
