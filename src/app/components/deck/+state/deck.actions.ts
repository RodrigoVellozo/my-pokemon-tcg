import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props, union } from '@ngrx/store';
import { Deck } from 'src/app/core/models/deck';
import { Pokemons } from 'src/app/core/models/pokemon-model';
import { Query } from 'src/app/core/models/pokemon-query';

export enum DeckActionsEnum {
    LOAD_POKEMONS = '[Decks] Load Pokemons',
    LOAD_POKEMONS_SUCCESS = '[Decks] Load Pokemons success',
    LOAD_POKEMONS_FAILURE = '[Decks] Load Pokemons failure',

    LOAD_DECKS = '[Decks] Load decks',
    LOAD_DECKS_SUCCESS = '[Decks] Load decks success',
    LOAD_DECKS_FAILURE = '[Decks] Load decks failure',

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
    props<{query: Query}>()
);

export const loadPokemonsSuccess = createAction(
    DeckActionsEnum.LOAD_POKEMONS_SUCCESS,
    props<{pokemonsResponse: Pokemons}>()
);

export const loadPokemonsFailure = createAction(
    DeckActionsEnum.LOAD_POKEMONS_FAILURE,
    props<{error: HttpErrorResponse}>()
);

export const loadDecks = createAction(
    DeckActionsEnum.LOAD_DECKS
);

export const loadDecksSuccess = createAction(
    DeckActionsEnum.LOAD_DECKS_SUCCESS,
    props<{decksResponse: Deck[]}>()
);

export const loadDecksFailure = createAction(
    DeckActionsEnum.LOAD_DECKS_FAILURE,
    props<{error: HttpErrorResponse}>()
);

export const deleteDeck = createAction(
    DeckActionsEnum.DELETE_DECK,
    props<{deck: Deck}>()
);

export const deleteDeckSuccess = createAction(
    DeckActionsEnum.DELETE_DECK_SUCCESS,
);

export const deleteDeckFailure = createAction(
    DeckActionsEnum.DELETE_DECK_FAILURE,
    props<{error: HttpErrorResponse}>()
);

export const resetState = createAction(DeckActionsEnum.RESET_STATE);

const _managePokemonsActionsUnion = union({
    loadPokemons,
    loadPokemonsSuccess,
    loadPokemonsFailure,

    loadDecks,
    loadDecksSuccess,
    loadDecksFailure,

    deleteDeck,
    deleteDeckSuccess,
    deleteDeckFailure,

    resetState
});

export type ManagePokemonsActionsUnion = typeof _managePokemonsActionsUnion;