import { PluginService } from '../src/services/PluginService';
import { ConfigService } from '../src/services/ConfigService';
import { HttpService } from '../src/services/HttpService';

jest.mock('../src/services/ConfigService');
jest.mock('../src/services/HttpService');
const MockedConfigService = <jest.Mock<ConfigService>>ConfigService;
const MockedHttpService = <jest.Mock<HttpService>>HttpService;

describe('PluginService', () => {
  beforeEach(() => {
    MockedConfigService.mockClear();
    MockedHttpService.mockClear();
  });

  test('exists', () => {
    const pluginService = new PluginService(new MockedConfigService(), new MockedHttpService());
    expect(PluginService).toBeTruthy();
    expect(pluginService).toBeTruthy();
  });
});
