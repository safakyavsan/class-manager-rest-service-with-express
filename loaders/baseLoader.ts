"use strict";

export class BaseLoader {
  async start() {
    throw new Error("Cannot call abstract method");
  }

  async stop() {
    throw new Error("Cannot call abstract method");
  }
}
