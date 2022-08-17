import { BaseLoader } from "./baseLoader";
export class MongoDbLoader extends BaseLoader {
  constructor(config: any) {
    super(config);
    this.config = config;
  }

  async start() {}
  async stop() {}
}
