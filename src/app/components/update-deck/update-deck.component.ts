import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IgxToastComponent } from 'igniteui-angular';
import { Deck } from 'src/app/core/models/deck';
import { Data } from 'src/app/core/models/pokemon-data';
import { DeckService } from 'src/app/core/services/deck.service';
import { PokemonService } from 'src/app/core/services/pokemon.service';

@Component({
  selector: 'app-update-deck',
  templateUrl: './update-deck.component.html',
  styleUrl: './update-deck.component.scss',
})
export class UpdateDeckComponent implements OnInit {
  @ViewChild('toast', { read: IgxToastComponent }) 
  public toast!: IgxToastComponent;
  
  public form = this._initForm();

  public deckId = this._route.snapshot.params['id'];

  public cards: Data[] = [];
  
  public choosenCards: { card: Data, amount: number }[]  = [];

  get name() {
    return this.form.get('name')?.value;
  }

  get imgUrl() {
    return this.form.get('imgUrl')?.value;
  }

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _deckService: DeckService,
    private _pokemonService: PokemonService,
    private _formBuilder: FormBuilder
  ) {
    this._pokemonService.getPokemons().then((res: any) =>{
      this.cards = res.data
    });
  }

  ngOnInit(): void {
    this.getADeck(this.deckId);
  }

  public getADeck(deckId: number) {
    this._deckService.getDeckById(deckId).subscribe({
      next: (data: any) => this._patchForm(data),
      error: (error) => console.log('Error:', error),
    });
  }

  private _initForm() {
    return this._formBuilder.group({
      id: [''],
      name: [''],
      imgUrl: [''],
      pokemons: this._formBuilder.array([]),
    });
  }

   private _patchForm(deck: Deck) {
    this.choosenCards = deck.pokemons;    
    this.form.patchValue({
      id: this.deckId,
      name: deck.name,
      imgUrl: deck.imgUrl,
    });
  }

  public updateDeck() {
    const dataToSend = {
      id: Number(this.deckId),
      name: this.name,
      imgUrl: this.imgUrl,
      pokemons: this.choosenCards
    } as Deck;
    
    this._deckService.updateDeck(dataToSend).subscribe();

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
