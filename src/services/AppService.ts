import { AppService as AppServiceAbstraction } from '../abstractions/AppService';
import { ConfigService } from '../services/ConfigService';
import { PluginService as PluginServiceAbstraction } from '../abstractions/PluginService';
import { PluginService } from '../services/PluginService';

export class AppService implements AppServiceAbstraction {
  private readonly configService: ConfigService;
  private readonly pluginService: PluginServiceAbstraction;

  constructor() {
    this.configService = new ConfigService();
    this.pluginService = new PluginService(this.configService);
  }

  static bootstrap(): AppService {
    return new AppService();
  }
}
