import { Cupon } from '../../../domain/Cupon';

export interface CuponRepository {
  findAllByRut(rut: string):Promise<Cupon[]>;
}
