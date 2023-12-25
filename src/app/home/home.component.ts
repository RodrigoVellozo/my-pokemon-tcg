import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Deck } from '../core/models/deck';
import { DeckService } from '../core/services/deck.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public isLoading = true;

  public decks: Deck[] = [];

  public deckDetails: Deck | undefined;

  constructor(private _deckService: DeckService) {}

  ngOnInit(): void {
    this.getAllDecks();
  }

  public toggleLoading = () => (this.isLoading = !this.isLoading);

  public getAllDecks(): void {
    this._deckService.getDecks().subscribe({
      next: response => this.decks = response,
      complete: () => this.toggleLoading(),
      error: (err) => console.error('Error: ', err),
    });
  }

  public previewDeck(deck: Deck): void {
    this.deckDetails = deck;
  }
  
  public deleteDeck(deck: Deck): void {
    this.deckDetails = undefined;
    this._deckService.deleteDeck(deck).subscribe((x) => this.getAllDecks());
  }
}
