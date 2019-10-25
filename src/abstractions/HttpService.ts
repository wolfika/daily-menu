import { Response } from 'got';

export abstract class HttpService {
  get: (url: string) => Promise<Response<string>>;
}
