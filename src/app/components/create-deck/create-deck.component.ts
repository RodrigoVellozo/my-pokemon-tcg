import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IgxSnackbarComponent, IgxToastComponent } from 'igniteui-angular';
import { Data } from 'src/app/core/models/pokemon-data';
import { DeckService } from 'src/app/core/services/deck.service';
import { PokemonService } from 'src/app/core/services/pokemon.service';

const defaultImage = 'https://tcg.pokemon.com/assets/img/tcgl/logos/en-us/logo.png';
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

  @ViewChild('toast', { read: IgxToastComponent }) 
  public toast!: IgxToastComponent;

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

  public createDeck() {
    const dataToSend = {
  
      name: this.form.value.name === null ? 'New Deck' : this.form.value.name,
      imgUrl: this.form.value.imgUrl === null ? defaultImage : this.form.value.imgUrl,
      pokemons: this.choosenCards,
    };
    this._deckService.postDeck(dataToSend).subscribe();
    this._router.navigateByUrl(`/home`);
  }

  drop(event: CdkDragDrop<{ card: Data, amount: number }[], Data[]>) {
    const item = event.previousContainer.data[event.previousIndex];
    const data = event.container.data;
    const existingCard = data.find((d) => d.card.name === item.name);
    
if (existingCard) {
      if (existingCard.amount < 4) {
        existingCard.amount++;
      }
      else {
        this.toast.open('Você só pode ter quatro unidades da mesma carta.')
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
