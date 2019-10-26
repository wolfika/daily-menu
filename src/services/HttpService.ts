import got, { Response, GotOptions } from 'got';
import { HttpService as HttpServiceAbstraction } from '../../common/src/abstractions/HttpService';

export class HttpService implements HttpServiceAbstraction {
  async get(url: string, options?: GotOptions<string>): Promise<Response<string>> {
    return await got(url, options);
  }
}
