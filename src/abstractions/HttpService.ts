import { Response, GotOptions } from 'got';

export abstract class HttpService {
  get: (url: string, options?: GotOptions<string>) => Promise<Response<string>>;
}
