import { ReverseHolofoil } from './pokemon-holofoil';
import { Holofoil } from './pokemon-reverse-holofoil';

export interface TcgPlayer {
  url: string;
  updatedAt: Date;
  prices: { holofoil: Holofoil; reverseHolofoil: ReverseHolofoil };
}
