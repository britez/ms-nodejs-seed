import { CuponRepository } from '../../application/port/out/CuponRepository';
import { Cupon } from '../../domain/Cupon';
import {inject, injectable} from 'inversify';
import { InternalErrorException } from '../../config/exception/InternalErrorException';

import axios from 'axios';
import TYPES from "../../config/types";
import {CuponApiCoreProperties} from "../../config/CuponApiCoreProperties";

@injectable()
export class CuponRestAdapter implements CuponRepository {

  constructor(@inject(TYPES.CuponApiCoreProperties) private cuponApiCoreProperties: CuponApiCoreProperties) {
  }

  public async findAllByRut(rut:string):Promise<Cupon[]> {
    try {
      const {data} = await axios
        .get(this.cuponApiCoreProperties.url.replace('{rut}', rut), {
          timeout: this.cuponApiCoreProperties.timeout,
          params: {
            country: this.cuponApiCoreProperties.country,
            channel: this.cuponApiCoreProperties.channel
          }
        });
      return data.stores
        .filter(it => it.store_number === this.cuponApiCoreProperties.storeNumber)
        .map(it => it.coupons)
        .reduce((acc, value) => acc.concat(value), [])
        .map(it => ({
          number: it.coupon_number,
          description: it.promotion_description,
          discount: it.discount_coupon,
          restriction: it.promotion_restriction,
          since: it.valid_since,
          until: it.valid_until
        }));
    } catch (error) {
      console.log('Error fetching!', error);
      throw new InternalErrorException(500, `Error fetching url: ${this.cuponApiCoreProperties.url}`);
    }
  }
}
