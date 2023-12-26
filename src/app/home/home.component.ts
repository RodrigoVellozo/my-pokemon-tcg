import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Deck } from '../core/models/deck';
import { DeckService } from '../core/services/deck.service';
import { DeckFacade } from '../components/deck/+state/deck.facade';
import { Query } from '../core/models/pokemon-query';
import { tap } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public decks$ = this._deckFacade.decks$;

  public isLoading$ = this._deckFacade.isLoading$;

  public deckDetails: Deck | undefined;

  constructor(private _deckFacade: DeckFacade) {}

  ngOnInit(): void {
    this._deckFacade.loadDecks();
  }

  public previewDeck(deck: Deck): void {
    this.deckDetails = deck;
  }
  
  public deleteDeck(deck: Deck): void {
    this._deckFacade.deleteDeck(deck);
  }
}
