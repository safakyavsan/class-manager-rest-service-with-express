import { Service } from "typedi";

@Service()
export class mongoDbConfig {
  url: string;
  constructor() {
    this.url =
      process.env.MONGODB_SERVER_URL ??
      "mongodb://localhost:27017/class-manager";
  }
}
