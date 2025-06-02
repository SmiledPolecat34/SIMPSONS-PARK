"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const SeasonSchema = new mongoose_1.Schema({
    number: { type: Number, required: true },
    title: { type: String, required: true }
});
exports.default = (0, mongoose_1.model)('Season', SeasonSchema);
