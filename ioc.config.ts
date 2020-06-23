import { Container } from 'inversify';
import TYPES from './src/config/types';

import { CuponByRutQuery } from './src/application/port/in/CuponByRutQuery';
import { ListCuponesByRutUseCase } from './src/application/usecase/ListCuponesByRutUseCase';

import { CuponRepository } from './src/application/port/out/CuponRepository';
import { CuponRestAdapter } from './src/adapter/rest/CuponRestAdapter';

import './src/adapter/controller/CuponController';
import './src/domain/Cupon';

// load everything needed to the Container
let container = new Container();
container.bind<CuponByRutQuery>(TYPES.CuponByRutQuery).to(ListCuponesByRutUseCase);
container.bind<CuponRepository>(TYPES.CuponRepository).to(CuponRestAdapter);

export default container;
