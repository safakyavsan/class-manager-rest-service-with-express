import { Service } from "typedi";

@Service()
export class apiConfig {
  port: string;
  constructor() {
    this.port = process.env.API_SERVER_PORT ?? "8080";
  }
}
