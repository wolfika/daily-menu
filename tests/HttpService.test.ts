import got from 'got';
import { HttpService } from '../src/services/HttpService';

jest.mock('got');

describe('HttpService', () => {
  let httpService: HttpService;

  beforeEach(() => {
    httpService = new HttpService();
  });

  it('exists', () => {
    expect(HttpService).toBeTruthy();
    expect(httpService).toBeTruthy();
  });

  it('#get(url)', () => {
    const url = 'https://google.com';
    httpService.get(url);
    expect(got).toBeCalledWith(url, undefined);
  });
});
