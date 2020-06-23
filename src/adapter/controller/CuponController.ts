import {controller, httpGet, response, request, BaseHttpController} from 'inversify-express-utils';
import { inject } from 'inversify';
import { Request, Response } from 'express';
import { CuponByRutQuery } from '../../application/port/in/CuponByRutQuery';

import TYPES from './../../config/types';
import {ApiOperationGet, ApiPath, SwaggerDefinitionConstant} from "swagger-express-ts";

@ApiPath({
  path: "/api/v1/cupones",
  name: "Cupon",
})
@controller('/api/v1/cupones')
export default class CuponController extends BaseHttpController {

  constructor(@inject(TYPES.CuponByRutQuery) private cuponByRutQuery: CuponByRutQuery) {
    super();
  }

  @ApiOperationGet({
    description: "Get cupones list desc",
    summary: "Get cupones list summ",
    responses: {
      200: { description: "Success", type: SwaggerDefinitionConstant.Response.Type.ARRAY, model: 'Cupon' }
    }
  })
  @httpGet('')
  public async listAllCupones (
    @request() req: Request,
    @response() res: Response) {
    const result = await this.cuponByRutQuery.listCuponByRut();
    return res.status(200).json(result.map(it => ({id: it.id})));
  }

}
