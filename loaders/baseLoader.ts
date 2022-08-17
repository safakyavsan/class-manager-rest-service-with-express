"use strict";

export class BaseLoader {
  config: any;
  constructor(config: any) {
    this.config = config;
  }

  async start() {
    throw new Error("Cannot call abstract method");
  }

  async stop() {
    throw new Error("Cannot call abstract method");
  }
}
