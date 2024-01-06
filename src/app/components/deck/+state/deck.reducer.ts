import { HttpErrorResponse } from '@angular/common/http';
import { Action, createReducer, on } from '@ngrx/store';
import { Deck } from 'src/app/core/models/deck';
import { Data } from 'src/app/core/models/pokemon-data';
import { Query } from 'src/app/core/models/pokemon-query';
import * as action from './deck.actions';

export const DECK_FEATURE_KEY = 'deckReducer';
export interface DeckState {
  isLoading: boolean;

  query: Query;

  pokemonsResponse: Data[];

  decksResponse: Deck[];

  error?: HttpErrorResponse;
}

export const initialState = {
  pokemonsResponse: [
    {
      id: 'xy11-1',
      name: 'Tangela',
      supertype: 'Pokémon',
      subtypes: ['Basic'],
      hp: '80',
      types: ['Grass'],
      evolvesTo: ['Tangrowth'],
      attacks: [
        {
          name: 'Slam',
          cost: ['Grass', 'Colorless'],
          convertedEnergyCost: 2,
          damage: '30×',
          text: 'Flip 2 coins. This attack does 30 damage times the number of heads.',
        },
        {
          name: 'Mega Drain',
          cost: ['Grass', 'Grass', 'Colorless'],
          convertedEnergyCost: 3,
          damage: '40',
          text: 'Heal 20 damage from this Pokémon.',
        },
      ],
      weaknesses: [
        {
          type: 'Fire',
          value: '×2',
        },
      ],
      retreatCost: ['Colorless', 'Colorless', 'Colorless'],
      convertedRetreatCost: 3,
      set: {
        id: 'xy11',
        name: 'Steam Siege',
        series: 'XY',
        printedTotal: 114,
        total: 116,
        legalities: {
          unlimited: 'Legal',
          expanded: 'Legal',
        },
        ptcgoCode: 'STS',
        releaseDate: '2016/08/03',
        updatedAt: '2019/04/10 19:59:00',
        images: {
          symbol: 'https://images.pokemontcg.io/xy11/symbol.png',
          logo: 'https://images.pokemontcg.io/xy11/logo.png',
        },
      },
      number: '1',
      artist: 'OOYAMA',
      rarity: 'Common',
      flavorText:
        'It tangles any moving thing with its vines. Their subtle shaking is ticklish if you get ensnared.',
      nationalPokedexNumbers: [114],
      legalities: {
        unlimited: 'Legal',
        expanded: 'Legal',
      },
      images: {
        small: 'https://images.pokemontcg.io/xy11/1.png',
        large: 'https://images.pokemontcg.io/xy11/1_hires.png',
      },
      tcgplayer: {
        url: 'https://prices.pokemontcg.io/tcgplayer/xy11-1',
        updatedAt: '2024/01/06',
        prices: {
          normal: {
            low: 0.01,
            mid: 0.1,
            high: 2,
            market: 0.06,
            directLow: 0.03,
          },
          reverseHolofoil: {
            low: 0.1,
            mid: 0.25,
            high: 1.96,
            market: 0.24,
            directLow: 0.22,
          },
        },
      },
      cardmarket: {
        url: 'https://prices.pokemontcg.io/cardmarket/xy11-1',
        updatedAt: '2024/01/06',
        prices: {
          averageSellPrice: 0.04,
          lowPrice: 0.02,
          trendPrice: 0.07,
          germanProLow: 0,
          suggestedPrice: 0,
          reverseHoloSell: 0.34,
          reverseHoloLow: 0.03,
          reverseHoloTrend: 0.19,
          lowPriceExPlus: 0.02,
          avg1: 0.06,
          avg7: 0.03,
          avg30: 0.09,
          reverseHoloAvg1: 0.5,
          reverseHoloAvg7: 0.3,
          reverseHoloAvg30: 0.31,
        },
      },
    },
  ],
  query: {
    name: '',
    page: 1,
    pageSize: 50,
  },
};

const _deckReducer = createReducer(
  initialState,
  on(action.loadPokemons, ({ query, ...state }, action) => ({
    ...state,
    query: {
      ...query,
      ...(action.query ?? {}),
    },
    isLoading: true,
    error: undefined,
  })),

  on(action.loadPokemonsSuccess, (state, action) => {
    console.log('misto', [
      ...state.pokemonsResponse,
      ...action.pokemonsResponse,
    ]);
    return {
      ...state,
      pokemonsResponse: [
        ...state.pokemonsResponse,
        ...action.pokemonsResponse,
      ] as any[],
      isLoading: false,
      error: undefined,
    };
  }),

  on(action.loadPokemonsFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),

  on(action.loadDecks, (state) => ({
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

  on(action.createDeck, (state) => ({
    ...state,
    isLoading: true,
    error: undefined,
  })),

  on(action.createDeckSuccess, (state) => ({
    ...state,
    isLoading: false,
    error: undefined,
  })),

  on(action.createDeckFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),

  on(action.deleteDeck, (state) => ({
    ...state,
    isLoading: true,
    error: undefined,
  })),
  on(action.deleteDeckSuccess, (state) => ({
    ...state,
    isLoading: false,
    error: undefined,
  })),
  on(action.deleteDeckFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),

  on(action.resetState, () => ({ ...initialState }))
);

export function deckReducer(state = initialState, action: Action) {
  return _deckReducer(state, action);
}
