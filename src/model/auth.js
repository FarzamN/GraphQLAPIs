import { Schema, model } from "mongoose";

const authSchema = new Schema(
  {
    name: { type: String, required: true },
    password: { type: String, required: true },
    birthDate: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export default model("user", authSchema);
