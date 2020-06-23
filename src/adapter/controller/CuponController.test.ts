import supertest from "supertest";
import "reflect-metadata";
import {
  cleanUpMetadata,
  InversifyExpressServer
} from 'inversify-express-utils';
import { Container } from "inversify";
import { CuponByRutQuery } from "../../application/port/in/CuponByRutQuery";
import TYPES from "../../config/types";

describe("Integration Tests:", () => {

  beforeEach((done) => {
      cleanUpMetadata();
      done();
  });

  it('', (done) => {

    require('./CuponController');

    const container = new Container();

    const mockedQuery:CuponByRutQuery = { listCuponByRut: () => Promise.resolve([{id: 1}])};

    container.bind<CuponByRutQuery>(TYPES.CuponByRutQuery)
      .toConstantValue(mockedQuery);

    let server = new InversifyExpressServer(container).build();

    supertest(server)
            .get("/api/v1/cupones")
            .expect('Content-Type', /json/)
            .expect(res => {
               expect(res.body).toBeInstanceOf(Array);
               expect(res.body).toHaveLength(1);
            })
            .expect(200, done);
  });

});
