import { HttpErrorResponse } from '@angular/common/http';
import { Action, createReducer, on } from '@ngrx/store';
import { Query } from 'src/app/core/models/pokemon-query';
import * as action from './deck.actions';
import { Deck } from 'src/app/core/models/deck';
import { Pokemons } from 'src/app/core/models/pokemon-model';

export const DECK_FEATURE_KEY = 'deckReducer';
export interface DeckState {
  isLoading: boolean;

  query: Query;

  pokemonsResponse: Pokemons;

  decksResponse: Deck[];

  error?: HttpErrorResponse;
}

export const initialState = {
  isLoading: false,
  query: {
    page: 0,
    pageSize: 100,
    name: '',
  },
};

const _deckReducer = createReducer(
  initialState,
  on(action.loadPokemons, (state, action) => ({
    ...state,
    isLoading: true,
    error: undefined,
  })),

  on(action.loadPokemonsSuccess, (state, { pokemonsResponse }) => ({
    ...state,
    isLoading: false,
    pokemonsResponse,
    error: undefined,
  })),

  on(action.loadPokemonsFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),

  on(action.loadDecks, (state, action) => ({
    ...state,
    isLoading: true,
    error: undefined,
  })),
  on(action.loadDecksSuccess, (state, { decksResponse }) => ({
    ...state,
    isLoading: false,
    decksResponse,
    error: undefined,
  })),

  on(action.loadDecksFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),

  on(action.deleteDeck, (state, action)=>({
    ...state,
    isLoading: true,
    error: undefined,
  })),
  on(action.deleteDeckSuccess, (state, action)=>({
    ...state,
    isLoading: false,
    error: undefined
  })),
  on(action.deleteDeckFailure,(state, {error})=>({
    ...state,
    isLoading: false,
    error
  })),

  on(action.resetState, () => ({ ...initialState }))
);

export function deckReducer(state = initialState, action: Action) {
  return _deckReducer(state, action);
}
