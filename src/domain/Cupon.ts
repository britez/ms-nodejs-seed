import { ApiModel, ApiModelProperty } from 'swagger-express-ts';

@ApiModel( {
  description : "Cupon description" ,
  name : "Cupon"
} )
export class Cupon {
  @ApiModelProperty( {
    description : "Number of discount" ,
    required : true,
    example: ['123456789']
  } )
  public readonly number: string;
  public readonly discount: string;
  public readonly description: string;
  public readonly restriction: string;
  public readonly since: string;
  public readonly until: string;

  constructor(number: string, discount: string, description: string, restriction: string, since: string, until: string) {
    this.number = number;
    this.discount = discount;
    this.description = description;
    this.restriction = restriction;
    this.since = since;
    this.until = until;
  }

}
