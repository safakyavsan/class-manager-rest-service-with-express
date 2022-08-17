import { BaseLoader } from "./baseLoader";

export class ExpressLoader extends BaseLoader {
  constructor(config: any) {
    super(config);
    this.config = config;
  }

  async start() {}
  async stop() {}
}
