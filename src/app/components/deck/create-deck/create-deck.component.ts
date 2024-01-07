import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IgxToastComponent } from 'igniteui-angular';
import {
  BehaviorSubject,
  Observable,
  of,
  withLatestFrom
} from 'rxjs';
import { Data } from 'src/app/core/models/pokemon-data';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import { DeckFacade } from '../+state/deck.facade';

const defaultImage =
  'https://tcg.pokemon.com/assets/img/tcgl/logos/en-us/logo.png';

@Component({
  selector: 'app-create-deck',
  templateUrl: './create-deck.component.html',
  styleUrl: './create-deck.component.scss',
})
export class CreateDeckComponent implements OnInit {
  @ViewChild('toast', { read: IgxToastComponent })
  public toast!: IgxToastComponent;

  public isLoading$ = this._deckFacade.isLoading$;

  public cards!: Data[];

  readonly search$ = new BehaviorSubject<string>('');

  public form = this._initForm();

  public choosenCards: { card: Data; amount: number }[] = [];

  public totalCards: any;

  public page = 1;

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _deckFacade: DeckFacade
  ) {}

  ngOnInit(): void {
    this.loadData();
    this._deckFacade.pokemons$.subscribe(data => (this.cards = data));
  }

  private _initForm(): FormGroup {
    return this._formBuilder.group({
      name: [null],
      imgUrl: [null],
      pokemons: this._formBuilder.array([]),
    });
  }

  public loadData(): void {
    this._deckFacade.loadPokemons({ page: this.page, pageSize: 50 });
  }

  public createDeck() {
    const dataToSend = {
      name: this.form.value.name === null ? 'New Deck' : this.form.value.name,
      imgUrl:
        this.form.value.imgUrl === null ? defaultImage : this.form.value.imgUrl,
      pokemons: this.choosenCards,
    };
    this._deckFacade.createDeck(dataToSend);
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
    this._deckFacade.loadPokemons({q: `name:${search}`, page: 1, pageSize: 50});
  }

  onScroll() {
    this._deckFacade.loadPokemons({ page: this.page + 1, pageSize: 50 });
  }
}
