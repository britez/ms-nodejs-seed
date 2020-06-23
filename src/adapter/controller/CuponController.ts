import {controller, httpGet, response, request, BaseHttpController} from 'inversify-express-utils';
import { inject } from 'inversify';
import { Request, Response } from 'express';
import { CuponByRutQuery } from '../../application/port/in/CuponByRutQuery';

import TYPES from './../../config/types';

@controller('/api/v1/cupones')
export default class CuponController extends BaseHttpController {

  constructor(@inject(TYPES.CuponByRutQuery) private cuponByRutQuery: CuponByRutQuery) {
    super();
  }

  @httpGet('')
  public async listAllCupones (
    @request() request: Request,
    @response() response: Response) {
    let result = await this.cuponByRutQuery.listCuponByRut();
    return response.status(200).json(result.map(it => ({id: it.id})));
  }

}
