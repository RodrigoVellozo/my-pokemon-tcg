import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DECK_FEATURE_KEY, DeckState } from './deck.reducer';

const selectDeckState = createFeatureSelector<DeckState>(DECK_FEATURE_KEY);

export const selectIsLoading = createSelector(
    selectDeckState,
    ({ isLoading }) => isLoading
);

export const selectDecksQuery = createSelector(
  selectDeckState,
  ({ query }) => query
);

export const selectDecks = createSelector(
  selectDeckState,
  ({ decksResponse }) => decksResponse
);

export const selectPokemons = createSelector(
  selectDeckState,
  ({ pokemonsResponse }) => pokemonsResponse
);
