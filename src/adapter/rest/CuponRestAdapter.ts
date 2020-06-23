import { CuponRepository } from './../../application/port/out/CuponRepository';
import { Cupon } from './../../domain/Cupon';
import { injectable } from 'inversify';
import { InternalErrorException } from './../../config/exception/InternalErrorException';

import axios from 'axios';

@injectable()
export class CuponRestAdapter implements CuponRepository {
  public async findAllByRut():Promise<Cupon[]> {
    try {
      let {data} = await axios.get('http://httpstat.us/500?sleep=5000');
      console.log('Data', data);
      return [{id: 2}];
    } catch (error) {
      console.log('Error fetching!', error);
      throw new InternalErrorException(500, 'Error fetching url: https://httpstatu.us');
    }
  }
}
