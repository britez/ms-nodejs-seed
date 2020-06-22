import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import { Container } from 'inversify';
import TYPES from './src/config/types';

import { CuponByRutQuery } from './src/application/port/in/CuponByRutQuery';
import { ListCuponesByRutUseCase } from './src/application/usecase/ListCuponesByRutUseCase';

import { CuponRepository } from './src/application/port/out/CuponRepository';
import { CuponRestAdapter } from './src/adapter/rest/CuponRestAdapter';

import './src/adapter/controller/CuponController';

// load everything needed to the Container
let container = new Container();
container.bind<CuponByRutQuery>(TYPES.CuponByRutQuery).to(ListCuponesByRutUseCase);
container.bind<CuponRepository>(TYPES.CuponRepository).to(CuponRestAdapter);

// start the server
let server = new InversifyExpressServer(container);

server.setConfig((app) => {
  // app.use(bodyParser.urlencoded({
    // extended: true
  // }));
  // app.use(bodyParser.json());
});

let serverInstance = server.build();
serverInstance.listen(3000);

console.log('Server started on port 3000 :)');
