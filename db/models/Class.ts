//mongoose scheme for Class
import { Schema, ObjectId } from "mongoose";

interface IClass {
  name: string;
  mainTeacher: ObjectId;
  students: ObjectId[];
  teachers: ObjectId[];
}

export const classSchema = new Schema<IClass>({
  name: { type: String, unique: true, lowercase: true },
  mainTeacher: { type: Schema.Types.ObjectId, ref: "User" },
  students: [{ type: Schema.Types.ObjectId, ref: "User" }],
  teachers: [{ type: Schema.Types.ObjectId, ref: "User" }],
});
