import { Schema } from "mongoose";

interface IUser {
  username: string;
  password: string;
  role: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  city: string;
  state: string;
  zip: number;
}

export const userSchema = new Schema<IUser>({
  username: { type: String, unique: true, lowercase: true },
  password: String,
  role: {
    type: String,
    enum: ["teacher", "manager", "student"],
    default: "student",
  },
  email: { type: String, unique: true, lowercase: true },
  firstName: String,
  lastName: String,
  phone: String,
  city: String,
  state: String,
  zip: Number,
});
