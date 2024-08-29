import mongoose from "mongoose";
import bycrypt from "bcrypt";

const mongoose = include(mongoose)
const bycrypt = include(bycrypt)

const userSchema = mongoose.Schema({
    username: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true, trim: true },
});

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) return next();
    this.password = await bycrypt.hash(this.password, 10);
    next();
});


module.exports = mongoose.model("User", userSchema);