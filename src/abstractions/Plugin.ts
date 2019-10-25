export abstract class Plugin {
  name: string;
  provide: () => Promise<string>;
}
