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
    httpService.get('https://google.com');
    expect(got).toBeCalled();
  });
});
