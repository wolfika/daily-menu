import { PluginService as PluginServiceAbstraction } from '../abstractions/PluginService';
import { ConfigService } from './ConfigService';
import { INSTALLED_PLUGINS_KEY } from '../constants';
import { Plugin } from '../abstractions/Plugin';

export class PluginService implements PluginServiceAbstraction {
  private pluginPaths: string[];
  private plugins: Plugin[];

  constructor(private readonly configService: ConfigService) {
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
    this.plugins = PluginConstructors.map((PluginConstructor: any) => new PluginConstructor());
  }
}
