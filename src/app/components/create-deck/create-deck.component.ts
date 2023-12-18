import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IgxPrependDropStrategy } from 'igniteui-angular';
import { VoidEventArgsDescription } from 'igniteui-angular-core';
import { Data } from 'src/app/core/models/pokemon-data';
import { DeckService } from 'src/app/core/services/deck.service';
import { PokemonService } from 'src/app/core/services/pokemon.service';

const defaultImage =
  'https://tcg.pokemon.com/assets/img/tcgl/logos/en-us/logo.png';

const testeCreate = [
  {
    id: 'hgss4-1',
    name: 'Aggron',
    supertype: 'Pokémon',
    subtypes: ['Stage 2'],
    hp: '140',
    types: ['Metal'],
    evolvesFrom: 'Lairon',
    attacks: [
      {
        name: 'Second Strike',
        cost: ['Metal', 'Metal', 'Colorless'],
        convertedEnergyCost: 3,
        damage: '40',
        text: 'If the Defending Pokémon already has any damage counters on it, this attack does 40 damage plus 40 more damage.',
      },
      {
        name: 'Guard Claw',
        cost: ['Metal', 'Metal', 'Colorless', 'Colorless'],
        convertedEnergyCost: 4,
        damage: '60',
        text: "During your opponent's next turn, any damage done to Aggron by attacks is reduced by 20 (after applying Weakness and Resistance).",
      },
    ],
    weaknesses: [
      {
        type: 'Fire',
        value: '×2',
      },
    ],
    resistances: [
      {
        type: 'Psychic',
        value: '-20',
      },
    ],
    retreatCost: ['Colorless', 'Colorless', 'Colorless', 'Colorless'],
    convertedRetreatCost: 4,
    set: {
      id: 'hgss4',
      name: 'HS—Triumphant',
      series: 'HeartGold & SoulSilver',
      printedTotal: 102,
      total: 103,
      legalities: {
        unlimited: 'Legal',
      },
      ptcgoCode: 'TM',
      releaseDate: '2010/11/03',
      updatedAt: '2018/03/04 10:35:00',
      images: {
        symbol: 'https://images.pokemontcg.io/hgss4/symbol.png',
        logo: 'https://images.pokemontcg.io/hgss4/logo.png',
      },
    },
    number: '1',
    artist: 'Kagemaru Himeno',
    rarity: 'Rare Holo',
    flavorText:
      'You can tell its age by the length of its iron horns. It claims an entire mountain as its territory.',
    nationalPokedexNumbers: [306],
    legalities: {
      unlimited: 'Legal',
    },
    images: {
      small: 'https://images.pokemontcg.io/hgss4/1.png',
      large: 'https://images.pokemontcg.io/hgss4/1_hires.png',
    },
    tcgplayer: {
      url: 'https://prices.pokemontcg.io/tcgplayer/hgss4-1',
      updatedAt: '2023/12/12',
      prices: {
        holofoil: {
          low: 1.33,
          mid: 1.75,
          high: 5.1,
          market: 1.68,
          directLow: null,
        },
        reverseHolofoil: {
          low: 1.99,
          mid: 3.78,
          high: 6.24,
          market: 4.8,
          directLow: 2.42,
        },
      },
    },
    cardmarket: {
      url: 'https://prices.pokemontcg.io/cardmarket/hgss4-1',
      updatedAt: '2023/12/12',
      prices: {
        averageSellPrice: 3.99,
        lowPrice: 0.4,
        trendPrice: 4.19,
        germanProLow: 0.0,
        suggestedPrice: 0.0,
        reverseHoloSell: 1.25,
        reverseHoloLow: 0.7,
        reverseHoloTrend: 2.69,
        lowPriceExPlus: 1.0,
        avg1: 3.99,
        avg7: 6.67,
        avg30: 3.58,
        reverseHoloAvg1: 1.25,
        reverseHoloAvg7: 2.77,
        reverseHoloAvg30: 3.12,
      },
    },
  },

  {
    id: 'ru1-1',
    name: 'Venusaur',
    supertype: 'Pokémon',
    subtypes: ['Stage 2'],
    hp: '140',
    types: ['Grass'],
    evolvesFrom: 'Ivysaur',
    attacks: [
      {
        name: 'Giga Drain',
        cost: ['Grass', 'Grass', 'Colorless', 'Colorless'],
        convertedEnergyCost: 4,
        damage: '50',
        text: 'Remove from Venusaur the number of damage counters equal to the damage you did to the Defending Pokémon.',
      },
    ],
    weaknesses: [
      {
        type: 'Fire',
        value: '×2',
      },
    ],
    retreatCost: ['Colorless', 'Colorless', 'Colorless', 'Colorless'],
    convertedRetreatCost: 4,
    set: {
      id: 'ru1',
      name: 'Pokémon Rumble',
      series: 'Other',
      printedTotal: 16,
      total: 16,
      legalities: {
        unlimited: 'Legal',
      },
      releaseDate: '2009/12/02',
      updatedAt: '2019/01/28 16:44:00',
      images: {
        symbol: 'https://images.pokemontcg.io/ru1/symbol.png',
        logo: 'https://images.pokemontcg.io/ru1/logo.png',
      },
    },
    number: '1',
    artist: 'Pokemon Rumble',
    nationalPokedexNumbers: [3],
    legalities: {
      unlimited: 'Legal',
    },
    images: {
      small: 'https://images.pokemontcg.io/ru1/1.png',
      large: 'https://images.pokemontcg.io/ru1/1_hires.png',
    },
    tcgplayer: {
      url: 'https://prices.pokemontcg.io/tcgplayer/ru1-1',
      updatedAt: '2023/12/15',
      prices: {
        holofoil: {
          low: 30.12,
          mid: 59.99,
          high: 105.66,
          market: 35,
          directLow: null,
        },
      },
    },
    cardmarket: {
      url: 'https://prices.pokemontcg.io/cardmarket/ru1-1',
      updatedAt: '2023/12/15',
      prices: {
        averageSellPrice: 12.99,
        lowPrice: 20,
        trendPrice: 36.86,
        germanProLow: 0,
        suggestedPrice: 0,
        reverseHoloSell: 0,
        reverseHoloLow: 49.9,
        reverseHoloTrend: 11.03,
        lowPriceExPlus: 27.99,
        avg1: 12.99,
        avg7: 33.9,
        avg30: 35.27,
        reverseHoloAvg1: 22.84,
        reverseHoloAvg7: 11.09,
        reverseHoloAvg30: 5.39,
      },
    },
  },
];

@Component({
  selector: 'app-create-deck',
  templateUrl: './create-deck.component.html',
  styleUrl: './create-deck.component.scss',
})
export class CreateDeckComponent {
  // TODO - resolver a questao dos requests 
  // public cards$ = this._pokemonService.getAllPokemons().pipe();
  public cards$: Data[] = [];

  public form = this._initForm();

  choosenCards: { card: Data, amount: number }[]  = [];

  public appendStrategy = IgxPrependDropStrategy;

  constructor(
    private _formBuilder: FormBuilder,
    private _deckService: DeckService,
    private _pokemonService: PokemonService,
    private _router: Router
  ) {
    // TODO - remover urgente
    this._pokemonService.getPokemons().then((res: any) =>{
      this.cards$ = res.data
    });
  }

  private _initForm(): FormGroup {
    return this._formBuilder.group({
      name: [null],
      imgUrl: [null],
      pokemons: this._formBuilder.array([]),
    });
  }

  get pokemons() {
    return this.form.controls['pokemons'] as FormArray;
  }

  public newPokemon() {
    return this._formBuilder.group({
      id: [null],
      name: [null],
      supertype:[]
    });
  }

  public addPokemon(){
    this.pokemons.push(this.newPokemon());
  }

  public removePokemon(index: number) {
    this.pokemons.removeAt(index);
  }

  public createDeck() {
    const dataToSend = {
      id: 10,
      name: this.form.value.name === null ? 'New Deck' : this.form.value.name,
      imgUrl: this.form.value.imgUrl === null ? defaultImage : this.form.value.imgUrl,
      pokemons: this.choosenCards,
    };
    console.log('>>>', dataToSend)
    this._deckService.postDeck(dataToSend).subscribe();
    this._router.navigateByUrl(`/home`);
  }

  drop(event: CdkDragDrop<{ card: Data, amount: number }[], Data[]>) {
    const item = event.previousContainer.data[event.previousIndex];
    const data = event.container.data;
    const existingCard = data.find((d) => d.card.name === item.name)
    if (existingCard) {
      if (existingCard.amount < 4) {
        existingCard.amount++;
      } else {
        alert('Você só pode ter quatro copias de um mesmo card em um deck!')
      }
      this.choosenCards = [...data];
      return;
    }

    data.unshift({
      card: item,
      amount: 1
    });
    
    this.choosenCards = [...data];
  }
}
