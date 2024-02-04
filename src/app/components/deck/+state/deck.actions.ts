import { HttpErrorResponse } from '@angular/common/http';
import { Data } from '@angular/router';
import { createAction, props, union } from '@ngrx/store';
import { Deck } from 'src/app/core/models/deck';
import { Pokemons } from 'src/app/core/models/pokemon-model';
import { Query } from 'src/app/core/models/pokemon-query';

export enum DeckActionsEnum {
  LOAD_POKEMONS = '[Decks] Load Pokemons',
  LOAD_POKEMONS_SUCCESS = '[Decks] Load Pokemons success',
  LOAD_POKEMONS_FAILURE = '[Decks] Load Pokemons failure',

  LOAD_MORE_POKEMONS = '[Decks] Load More Pokemons',
  LOAD_MORE_POKEMONS_SUCCESS = '[Decks] Load More Pokemons success',
  LOAD_MORE_POKEMONS_FAILURE = '[Decks] Load More Pokemons failure',

  LOAD_DECKS = '[Decks] Load decks',
  LOAD_DECKS_SUCCESS = '[Decks] Load decks success',
  LOAD_DECKS_FAILURE = '[Decks] Load decks failure',

  LOAD_DECK_BY_ID = '[Decks] Load deck by ID',
  LOAD_DECK_BY_ID_SUCCESS = '[Decks] Load deck by ID success',
  LOAD_DECK_BY_ID_FAILURE = '[Decks] Load deck by ID failure',

  CREATE_DECK = '[Deck] Create Deck',
  CREATE_DECK_SUCCESS = '[Deck] Create Deck Success',
  CREATE_DECK_FAILURE = '[Deck] Create Deck Failure',

  UPDATE_DECK = '[Deck] Update Deck',
  UPDATE_DECK_SUCCESS = '[Deck] Update Deck Success',
  UPDATE_DECK_FAILURE = '[Deck] Update Deck Failure',

  DELETE_DECK = '[Deck] Delete Deck',
  DELETE_DECK_SUCCESS = '[Deck] Delete Deck Success',
  DELETE_DECK_FAILURE = '[Deck] Delete Deck Failure',

  RESET_STATE = '[Decks] Reset State',
}

export const loadPokemons = createAction(
  DeckActionsEnum.LOAD_POKEMONS,
  props<{ query: Query }>()
);

export const loadPokemonsSuccess = createAction(
  DeckActionsEnum.LOAD_POKEMONS_SUCCESS,
  props<{ pokemonsResponse: Data[]; query: Query }>()
);

export const loadPokemonsFailure = createAction(
  DeckActionsEnum.LOAD_POKEMONS_FAILURE,
  props<{ error: HttpErrorResponse }>()
);

export const loadMorePokemons = createAction(
  DeckActionsEnum.LOAD_MORE_POKEMONS,
  props<{ query: Query }>()
);

export const loadMorePokemonsSuccess = createAction(
  DeckActionsEnum.LOAD_MORE_POKEMONS_SUCCESS,
  props<{ pokemonsResponse: Data[]; query: Query }>()
);

export const loadMorePokemonsFailure = createAction(
  DeckActionsEnum.LOAD_MORE_POKEMONS_FAILURE,
  props<{ error: HttpErrorResponse }>()
);

export const loadDecks = createAction(DeckActionsEnum.LOAD_DECKS);

export const loadDecksSuccess = createAction(
  DeckActionsEnum.LOAD_DECKS_SUCCESS,
  props<{ decksResponse: Deck[] }>()
);

export const loadDecksFailure = createAction(
  DeckActionsEnum.LOAD_DECKS_FAILURE,
  props<{ error: HttpErrorResponse }>()
);

export const loadDeckById = createAction(
  DeckActionsEnum.LOAD_DECK_BY_ID,
  props<{ id: number }>()
);

export const loadDeckByIdSuccess = createAction(
  DeckActionsEnum.LOAD_DECK_BY_ID_SUCCESS,
  props<{ deckResponse: Deck }>()
);

export const loadDeckByIdFailure = createAction(
  DeckActionsEnum.LOAD_DECK_BY_ID_FAILURE,
  props<{ error: HttpErrorResponse }>()
);

export const createDeck = createAction(
  DeckActionsEnum.CREATE_DECK,
  props<{ deck: Deck }>()
);

export const createDeckSuccess = createAction(
  DeckActionsEnum.CREATE_DECK_SUCCESS
);

export const createDeckFailure = createAction(
  DeckActionsEnum.CREATE_DECK_FAILURE,
  props<{ error: HttpErrorResponse }>()
);

export const deleteDeck = createAction(
  DeckActionsEnum.DELETE_DECK,
  props<{ deck: Deck }>()
);

export const updateDeck = createAction(
  DeckActionsEnum.UPDATE_DECK,
  props<{ deck: Deck }>()
);

export const updateDeckSuccess = createAction(
  DeckActionsEnum.UPDATE_DECK_SUCCESS
);

export const updateDeckFailure = createAction(
  DeckActionsEnum.UPDATE_DECK_FAILURE,
  props<{ error: HttpErrorResponse }>()
);

export const deleteDeckSuccess = createAction(
  DeckActionsEnum.DELETE_DECK_SUCCESS
);

export const deleteDeckFailure = createAction(
  DeckActionsEnum.DELETE_DECK_FAILURE,
  props<{ error: HttpErrorResponse }>()
);

export const resetState = createAction(DeckActionsEnum.RESET_STATE);

const _managePokemonsActionsUnion = union({
  loadPokemons,
  loadPokemonsSuccess,
  loadPokemonsFailure,

  loadMorePokemons,
  loadMorePokemonsSuccess,
  loadMorePokemonsFailure,

  loadDecks,
  loadDecksSuccess,
  loadDecksFailure,

  loadDeckById,
  loadDeckByIdSuccess,
  loadDeckByIdFailure,

  createDeck,
  createDeckSuccess,
  createDeckFailure,

  deleteDeck,
  deleteDeckSuccess,
  deleteDeckFailure,

  resetState,
});

export type ManagePokemonsActionsUnion = typeof _managePokemonsActionsUnion;
