import { CuponRepository } from './../../application/port/out/CuponRepository';
import { Cupon } from './../../domain/Cupon';
import { injectable } from 'inversify';

import axios from 'axios';

@injectable()
export class CuponRestAdapter implements CuponRepository {
  public async findAllByRut():Promise<Cupon[]> {
    try {
      let {data} = await axios.get('http://httpstat.us/200?sleep=5000');
      console.log('Data', data);
      return [{id: 2}];
    } catch (error) {
      console.log('Error fetching!', error);
      throw new Error('Error fetching url: https://httpstatu.us');
    }
  }
}
