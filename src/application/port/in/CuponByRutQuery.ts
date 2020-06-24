import { Cupon } from '../../../domain/Cupon';

export interface CuponByRutQuery {
  listCuponByRut(rut: string): Promise<Cupon[]>;
}
