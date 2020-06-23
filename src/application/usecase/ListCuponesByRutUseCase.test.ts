import { ListCuponesByRutUseCase } from './ListCuponesByRutUseCase';
import { CuponRepository } from './../port/out/CuponRepository';
import { Cupon } from './../../domain/Cupon';

const mockedData = [{id: 1}];
class MockedCuponRepository implements CuponRepository {
  public async findAllByRut():Promise<Cupon[]> {
    return Promise.resolve(mockedData);
  }
}

describe('ListCuponesByRutUseCase tests', () => {
  const listCuponesByRutUseCase = new ListCuponesByRutUseCase(new MockedCuponRepository());

  it('when a list of cupones is retrieved', async () => {
    await expect(listCuponesByRutUseCase.listCuponByRut()).resolves.toBe(mockedData);
  });

});
