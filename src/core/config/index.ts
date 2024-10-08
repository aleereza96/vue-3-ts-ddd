export class Config {
  private static instance: Config

  private constructor() {}

  public static getInstance(): Config {
    if (!Config.instance) {
      Config.instance = new Config()
    }
    return Config.instance
  }

  public getProperty(property: string): any {
    return import.meta.env[property]
  }
}
