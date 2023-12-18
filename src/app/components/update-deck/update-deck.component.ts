import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Deck } from 'src/app/core/models/deck';
import { DeckService } from 'src/app/core/services/deck.service';

@Component({
  selector: 'app-update-deck',
  templateUrl: './update-deck.component.html',
  styleUrl: './update-deck.component.scss',
})
export class UpdateDeckComponent implements OnInit {
  public form = this._initForm();

  public deckId = this._route.snapshot.params['id'];

  get name() {
    return this.form.get('name')?.value;
  }

  get imgUrl() {
    return this.form.get('imgUrl')?.value;
  }

  get pokemons(): FormArray {
    return this.form.get('pokemons') as FormArray;
  }

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _deckService: DeckService,
    private _formBuilder: FormBuilder
  ) {}

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

  public newPokemon(): FormGroup{
    return this._formBuilder.group({
      id: [''],
      name: [''],
      supertype:['']
    })
  }

  public addPokemon(){
    this.pokemons.push(this.newPokemon());
  }

  public removePokemon(index: number){
    this.pokemons.removeAt(index)
  }

  private _patchForm(deck: Deck) {

    deck.pokemons.forEach(x => {
      const pokemons = this.newPokemon();
      this.pokemons.push(pokemons)
    })
    
    this.form.patchValue({
      id: this.deckId,
      name: deck.name,
      imgUrl: deck.imgUrl,
      pokemons: deck.pokemons
    });
  }

  public updateDeck() {
    const dataToSend = {
      id: Number(this.deckId),
      name: this.name,
      imgUrl: this.imgUrl,
      pokemons: this.pokemons.value,
    } as Deck;

    console.log('update, indo',this.form.value)
    
    this._deckService.updateDeck(dataToSend).subscribe();

    this._router.navigateByUrl(`/home`);
  }
}
