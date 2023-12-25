import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Deck } from '../models/deck';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  // private decksUrl = 'api/decks';
  private decksUrl = 'http://localhost:3000/decks';

  constructor(private _http: HttpClient) { }

  public getDecks(): Observable<Deck[]> {
    return this._http.get<Deck[]>(this.decksUrl).pipe(
      catchError(this.handleError)
    );
  }

  public getDeckById(deckId: number){
    return this._http.get(`${this.decksUrl}/${deckId}`).pipe(
      catchError(this.handleError)
    );
  }

  public postDeck(deck: Deck){
    return this._http.post<Deck>(this.decksUrl, deck);
  }

  public updateDeck(deck: Deck){
    return this._http.put<Deck>(`${this.decksUrl}/${deck.id}`, deck).pipe(
      catchError(this.handleError)
    );
  }

  public deleteDeck(deck: Deck){
    return this._http.delete<Deck>(this.decksUrl+"/"+deck.id).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any){
    return throwError(() => error);
  }
}
