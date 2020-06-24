import { Cupon } from '../../../domain/Cupon';

export interface CuponRepository {
  findAllByRut():Promise<Cupon[]>;
}
