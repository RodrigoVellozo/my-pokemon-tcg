import { Image } from './pokemon-image';
import { Legality } from './pokemon-legality';

export interface Set {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  legalities: Legality;
  ptcgoCode: string;
  releaseDate: Date;
  updatedAt: Date;
  images: Image;
}
