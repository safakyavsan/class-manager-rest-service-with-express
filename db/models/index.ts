import { userSchema } from "./User";
import { classSchema } from "./Class";
import { Service } from "typedi";

@Service()
export class Models {
  userSchema: typeof userSchema;
  classSchema: typeof classSchema;
  constructor() {
    this.userSchema = userSchema;
    this.classSchema = classSchema;
  }

  getModels() {
    return {
      userSchema: this.userSchema,
      classSchema: this.classSchema,
    };
  }
}
