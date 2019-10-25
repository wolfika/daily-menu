import { PluginService as PluginServiceAbstraction } from '../abstractions/PluginService';
import { ConfigService } from './ConfigService';
import { INSTALLED_PLUGINS_KEY } from '../constants';
import { Plugin } from '../abstractions/Plugin';
import { HttpService } from '../abstractions/HttpService';

export class PluginService implements PluginServiceAbstraction {
  private pluginPaths: string[];
  private plugins: Plugin[];

  constructor(private readonly configService: ConfigService, private readonly httpService: HttpService) {
    this.pluginPaths = this.configService.get(INSTALLED_PLUGINS_KEY, []);
  }

  install(): void {
    return;
  }

  uninstall(): void {
    return;
  }

  async loadAll(): Promise<void> {
    const pluginModulePromises = this.pluginPaths.map((pluginPath: string): Promise<any> => import(pluginPath));
    const PluginConstructors = (await Promise.all(pluginModulePromises)).map((pluginModule) => pluginModule.default);
    this.plugins = PluginConstructors.map((PluginConstructor: any) => new PluginConstructor(this.httpService));
  }
}
