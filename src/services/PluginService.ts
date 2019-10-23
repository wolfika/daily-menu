import { PluginService as PluginServiceAbstraction } from '../abstractions/PluginService';
import { ConfigService } from './ConfigService';
import { INSTALLED_PROVIDERS_KEY } from '../constants';

export class PluginService implements PluginServiceAbstraction {
  private pluginPaths: string[];

  constructor(private readonly configService: ConfigService) {
    this.pluginPaths = this.configService.get(INSTALLED_PROVIDERS_KEY, []);
  }

  install() {}

  uninstall() {}

  loadAll() {}
}
