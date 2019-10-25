import got, { Response } from 'got';
import { HttpService as HttpServiceAbstraction } from '../abstractions/HttpService';

export class HttpService implements HttpServiceAbstraction {
  async get(url: string): Promise<Response<string>> {
    return await got(url);
  }
}
