"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: false },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
});
exports.default = (0, mongoose_1.model)('User', UserSchema);
