import { Inject, Service } from "typedi";
import { mongoDbConfig } from "../configs/mongoDbConfig";
import { Models } from "../db/models";
import { BaseLoader } from "./baseLoader";
import mongoose from "mongoose";

type MongoModelsObject = {
  [key: string]: any;
};
@Service()
export class MongoDbLoader extends BaseLoader {
  _config: mongoDbConfig;
  _models: MongoModelsObject;
  constructor(@Inject() config: mongoDbConfig, @Inject() models: Models) {
    super();
    this._config = config;
    this._models = models.getModels();
  }

  async start() {
    const { _config, _models } = this;
    const { url } = _config;
    const { userSchema, classSchema } = _models;
    const db = mongoose.connection;
    mongoose.connect(url);
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", function () {
      console.log("connected to db");
    });
    const userModel = db.model("user", userSchema);
    const classModel = db.model("class", classSchema);
    this._models = {
      userModel,
      classModel,
    };
  }
  getModels() {
    return this._models;
  }
  async stop() {
    mongoose.disconnect();
  }
}
