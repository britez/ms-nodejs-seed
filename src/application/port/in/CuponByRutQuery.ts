import Cupon from './../../domain/Cupon';

export interface CuponByRutQuery {
  listCuponByRut(): Promise<Cupon[]>;
}
