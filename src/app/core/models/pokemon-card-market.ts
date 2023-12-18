import { Price } from './pokemon-price';

export interface CardMarket {
  url: string;
  updatedAt: Date;
  prices: Price;
}
