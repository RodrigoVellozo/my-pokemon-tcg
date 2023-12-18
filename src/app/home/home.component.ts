import { Component, OnInit } from '@angular/core';
import { DeckService } from '../core/services/deck.service';
import { tap } from 'rxjs';
import { Deck } from '../core/models/deck';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public decks: Deck[] = [];

  public deckDetails: Deck | undefined;

  constructor(private _deckService: DeckService) {}

  ngOnInit(): void {
    this.getAllDecks();
  }

  public getAllDecks(): void {
    this._deckService.getDecks().subscribe((data) => (this.decks = data));
  }

  public previewDeck(deck: Deck): void {
    this.deckDetails = deck;
  }
  
  public deleteDeck(deck: Deck): void {
    this.deckDetails = undefined;
    this._deckService.deleteDeck(deck).subscribe((x) => this.getAllDecks());
  }

 
}
