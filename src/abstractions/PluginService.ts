export abstract class PluginService {
  install: (source: string) => void;
  uninstall: (name: string) => void;
  loadAll: () => void;
}
