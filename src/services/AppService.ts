import { AppService as AppServiceAbstraction } from '../abstractions/AppService';
import { ConfigService } from '../services/ConfigService';
import { HttpService as HttpServiceAbstraction } from '../../common/src/abstractions/HttpService';
import { HttpService } from '../services/HttpService';
import { PluginService as PluginServiceAbstraction } from '../abstractions/PluginService';
import { PluginService } from '../services/PluginService';

export class AppService implements AppServiceAbstraction {
  private readonly configService: ConfigService;
  private readonly httpService: HttpServiceAbstraction;
  private readonly pluginService: PluginServiceAbstraction;

  constructor() {
    this.configService = new ConfigService();
    this.httpService = new HttpService();
    this.pluginService = new PluginService(this.configService, this.httpService);
  }

  static async bootstrap(): Promise<AppService> {
    const appService = new AppService();
    await appService.pluginService.loadAll();
    return appService;
  }
}
