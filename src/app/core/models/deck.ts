import { Data } from "./pokemon-data";

export interface Deck {
    id?: number,
    name: string;
    imgUrl: string;
    pokemons: Array<DeckItem>;
}

export interface DeckItem {
    card: Data;
    amount: number;
}