import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  confirmPassword: { type: stringify, required: true },
});

const User = mongoose.models.user || mongoose.model("user", userSchema);
export default User;
