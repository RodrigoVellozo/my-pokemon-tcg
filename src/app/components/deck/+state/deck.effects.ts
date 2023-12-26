import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DeckService } from 'src/app/core/services/deck.service';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import {
  DeckActionsEnum,
  createDeckFailure,
  createDeckSuccess,
  deleteDeckFailure,
  deleteDeckSuccess,
  loadDecks,
  loadDecksFailure,
  loadDecksSuccess,
  loadPokemonsFailure,
  loadPokemonsSuccess,
  updateDeckFailure,
  updateDeckSuccess,
} from './deck.actions';
import { catchError, map, of, switchMap, tap, withLatestFrom } from 'rxjs';
import { DeckFacade } from './deck.facade';

@Injectable()
export class DeckEffects {
  public readonly loadPokemons$ = createEffect(() =>
    this._actions$.pipe(
      ofType(DeckActionsEnum.LOAD_POKEMONS),
      withLatestFrom(this._deckFacade.query$),
      map(([{ query }, oldQuery]) => ({ ...oldQuery, ...(query || {}) })),
      switchMap((query) => {
        return this._pokemonService.getAllPokemons(query).pipe(
          map((pokemonsResponse) =>
            loadPokemonsSuccess({ pokemonsResponse, query })
          ),
          catchError((error) => of(loadPokemonsFailure(error)))
        );
      })
    )
  );

  public readonly loadDecks$ = createEffect(() =>
    this._actions$.pipe(
      ofType(DeckActionsEnum.LOAD_DECKS),
      switchMap(() => {
        return this._deckService.getDecks().pipe(
          map((decksResponse) => loadDecksSuccess({ decksResponse })),
          catchError((error) => of(loadDecksFailure({ error })))
        );
      })
    )
  );

  public readonly createDeck$ = createEffect(() =>
    this._actions$.pipe(
      ofType(DeckActionsEnum.CREATE_DECK),
      switchMap(({ deck }) =>
        this._deckService.postDeck(deck).pipe(
          map(() => createDeckSuccess()),
          catchError((error) => of(createDeckFailure({ error })))
        )
      )
    )
  );

  public readonly updateDeck = createEffect(() =>
    this._actions$.pipe(
      ofType(DeckActionsEnum.UPDATE_DECK),
      switchMap(({ deck }) =>
        this._deckService.updateDeck(deck).pipe(
          map(() => updateDeckSuccess()),
          catchError((error) => of(updateDeckFailure({ error })))
        )
      )
    )
  );

  public readonly deleteDeck$ = createEffect(() =>
    this._actions$.pipe(
      ofType(DeckActionsEnum.DELETE_DECK),
      switchMap(({ deck }) =>
        this._deckService.deleteDeck(deck).pipe(
          map(() => deleteDeckSuccess()),
          catchError((error) => of(deleteDeckFailure({ error })))
        )
      )
    )
  );

  public readonly deleteDeckSuccess$ = createEffect(() =>
    this._actions$.pipe(
      ofType(DeckActionsEnum.DELETE_DECK_SUCCESS),
      tap(() => {
        console.log('exibir toast: apagou com sucesso');
      }),
      map(() => loadDecks())
    )
  );

  public readonly deleteDeckFailure$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(DeckActionsEnum.DELETE_DECK_FAILURE),
        tap(() => {
          console.log('exibir toast: falhou ao apagar registro');
        })
      ),
    { dispatch: false }
  );

  constructor(
    private _actions$: Actions<any>,
    private _pokemonService: PokemonService,
    private _deckService: DeckService,
    private _deckFacade: DeckFacade
  ) {}
}
