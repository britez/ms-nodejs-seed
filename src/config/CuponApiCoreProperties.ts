import {inject, injectable} from "inversify";
import TYPES from "./types";

@injectable()
export class CuponApiCoreProperties {
  public readonly baseUrl:string;
  public readonly pathUrl:string;
  public readonly country:string;
  public readonly channel:string;
  public readonly url:string;
  public readonly timeout:number;
  public readonly storeNumber:number;


  private SUFIX:string = 'cupon.api.core.';

  constructor(@inject(TYPES.Config) private env:any) {
    this.baseUrl = this.env[`${this.SUFIX}baseUrl`];
    this.pathUrl = this.env[`${this.SUFIX}pathUrl`];
    this.country = this.env[`${this.SUFIX}country`];
    this.channel = this.env[`${this.SUFIX}channel`];
    this.storeNumber = this.env[`${this.SUFIX}storeNumber`];
    this.timeout = +this.env[`${this.SUFIX}timeout`];
    this.url = `${this.baseUrl}${this.pathUrl}`;
  }

}
