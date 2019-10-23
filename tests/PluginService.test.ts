import { PluginService } from '../src/services/PluginService';
import { ConfigService } from '../src/services/ConfigService';

jest.mock('../src/services/ConfigService');
const MockedConfigService = <jest.Mock<ConfigService>>ConfigService;

describe('PluginService', () => {
  beforeEach(() => {
    MockedConfigService.mockClear();
  });

  test('exists', () => {
    const pluginService = new PluginService(new MockedConfigService());
    expect(PluginService).toBeTruthy();
    expect(pluginService).toBeTruthy();
  });
});
