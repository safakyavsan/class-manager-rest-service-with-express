"use strict";

import { apiConfig } from "../configs/apiServerConfig";
import { mongoDbConfig } from "../configs/mongoDbConfig";

export class BaseLoader {
  async start() {
    throw new Error("Cannot call abstract method");
  }

  async stop() {
    throw new Error("Cannot call abstract method");
  }
}
