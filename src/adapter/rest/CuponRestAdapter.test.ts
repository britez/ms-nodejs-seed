import { CuponRestAdapter } from './CuponRestAdapter';
import axios from 'axios';
import "reflect-metadata";

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('CuponRestAdapter tests', () => {

  const cuponRestAdapter = new CuponRestAdapter();

  it('Fetch cupones successfully', async () => {
    const data = [{id:2}];
    mockedAxios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(cuponRestAdapter.findAllByRut()).resolves.toEqual(data);
    expect(mockedAxios.get).toHaveBeenCalledWith('http://httpstat.us/500?sleep=5000');
  })

  it('Fetch cupones with error', async () => {
    mockedAxios.get.mockImplementationOnce(() => Promise.reject(new Error('some error')));
    await expect(cuponRestAdapter.findAllByRut()).rejects.toThrow('Error fetching url: https://httpstatu.us');
  })

})
