import { injectable, inject } from 'inversify';
import { CuponByRutQuery } from './../port/in/CuponByRutQuery';
import { CuponRepository } from './../port/out/CuponRepository';
import { Cupon } from './../../domain/Cupon';

import TYPES from './../../config/types';

@injectable()
export class ListCuponesByRutUseCase implements CuponByRutQuery {

  constructor(@inject(TYPES.CuponRepository) private cuponRepository: CuponRepository) { }

  async listCuponByRut(rut: string): Promise<Cupon[]> {
    const response = await this.cuponRepository.findAllByRut(rut);
    console.log('Response from use case', response);
    return response;
  }

}
