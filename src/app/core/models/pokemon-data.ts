import { Attack } from './pokemon-attack';
import { CardMarket } from './pokemon-card-market';
import { Image } from './pokemon-image';
import { Legality } from './pokemon-legality';
import { Resistance } from './pokemon-resistance';
import { Set } from './pokemon-set';
import { TcgPlayer } from './pokemon-tcg-player';
import { Weakness } from './pokemon-weakness';

export interface Data {
  id: string;
  name: string;
  supertype: string;
  subtypes: Array<string>;
  hp: string;
  types: Array<string>;
  evolvesFrom: string;
  retreatCost: Array<string>;
  convertedRetreatCost: number;
  number: string;
  artist: string;
  rarity: string;
  flavorText: string;
  nationalPokedexNumbers: Array<number>;
  attacks: Array<Attack>;
  weaknesses: Array<Weakness>;
  resistances: Array<Resistance>;
  set: Set;
  legalities: Legality;
  images: Image;
  tcgplayer: TcgPlayer;
  cardmarket: CardMarket;
}