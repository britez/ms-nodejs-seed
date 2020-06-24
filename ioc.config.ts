import { Container } from 'inversify';
import TYPES from './src/config/types';
import * as dotenv from "dotenv";

import { CuponByRutQuery } from './src/application/port/in/CuponByRutQuery';
import { ListCuponesByRutUseCase } from './src/application/usecase/ListCuponesByRutUseCase';

import { CuponRepository } from './src/application/port/out/CuponRepository';
import { CuponRestAdapter } from './src/adapter/rest/CuponRestAdapter';

import './src/adapter/controller/CuponController';
import './src/domain/Cupon';
import {CuponApiCoreProperties} from "./src/config/CuponApiCoreProperties";

// load everything needed to the Container
const container = new Container();
container.bind<CuponByRutQuery>(TYPES.CuponByRutQuery).to(ListCuponesByRutUseCase);
container.bind<CuponRepository>(TYPES.CuponRepository).to(CuponRestAdapter);

dotenv.config({path: process.env.NODE_ENV === 'production'?'./.env':`./.env.${process.env.NODE_ENV}`});

container.bind<any>(TYPES.Config).toConstantValue(process.env);
container.bind<CuponApiCoreProperties>(TYPES.CuponApiCoreProperties).to(CuponApiCoreProperties);




export default container;
