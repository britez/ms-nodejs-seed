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

  private PREFIX:string = 'cupon.api.core.';

  constructor(@inject(TYPES.Config) private env:any) {
    this.baseUrl = this.env[`${this.PREFIX}baseUrl`];
    this.pathUrl = this.env[`${this.PREFIX}pathUrl`];
    this.country = this.env[`${this.PREFIX}country`];
    this.channel = this.env[`${this.PREFIX}channel`];
    this.storeNumber = this.env[`${this.PREFIX}storeNumber`];
    this.timeout = +this.env[`${this.PREFIX}timeout`];
    this.url = `${this.baseUrl}${this.pathUrl}`;
  }

}
