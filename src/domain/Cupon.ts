import { ApiModel, ApiModelProperty } from 'swagger-express-ts';

@ApiModel( {
  description : "Cupon description" ,
  name : "Cupon"
} )
export class Cupon {
  @ApiModelProperty( {
    description : "Id of version" ,
    required : true,
    example: ['123456789']
  } )
  public id: number;

  constructor(id:number) {
    this.id = id;
  }



}
