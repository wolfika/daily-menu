import { PluginService as PluginServiceAbstraction } from '../abstractions/PluginService';
import { ConfigService } from './ConfigService';
import { INSTALLED_PLUGINS_KEY } from '../constants';

export class PluginService implements PluginServiceAbstraction {
  private pluginPaths: string[];

  constructor(private readonly configService: ConfigService) {
    this.pluginPaths = this.configService.get(INSTALLED_PLUGINS_KEY, []);
  }

  install(): void {
    return;
  }

  uninstall(): void {
    return;
  }

  loadAll(): void {
    return;
  }
}
